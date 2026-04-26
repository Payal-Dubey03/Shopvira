import bcrypt from 'bcryptjs';
import { UserModel } from '../users/user.model';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../../utils/jwt';
import { SessionModel } from './session.model';

const REFRESH_SALT_ROUNDS = 10;
const PASSWORD_SALT_ROUNDS = 12;

export async function register(email: string, password: string) {
  const existing = await UserModel.findOne({ email });
  if (existing) {
    const err = new Error('Email already in use') as any;
    err.statusCode = 409;
    err.code = 'CONFLICT';
    throw err;
  }

  const passwordHash = await bcrypt.hash(password, PASSWORD_SALT_ROUNDS);
  const user = await UserModel.create({ email, passwordHash, role: 'customer' });
  return user;
}

export async function login(
  email: string,
  password: string,
  meta?: { userAgent?: string | null; ip?: string | null }
) {
  const user = await UserModel.findOne({ email });
  if (!user) {
    const err = new Error('Invalid credentials') as any;
    err.statusCode = 401;
    err.code = 'UNAUTHORIZED';
    throw err;
  }

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) {
    const err = new Error('Invalid credentials') as any;
    err.statusCode = 401;
    err.code = 'UNAUTHORIZED';
    throw err;
  }

  const accessToken = signAccessToken({ sub: user._id.toString(), role: user.role });
  // Create a per-device session and bind refresh token to it (sid).
  const session = await SessionModel.create({
    userId: user._id,
    refreshTokenHash: 'placeholder',
    userAgent: meta?.userAgent ?? null,
    ip: meta?.ip ?? null,
  });
  const refreshToken = signRefreshToken({
    sub: user._id.toString(),
    tokenVersion: user.tokenVersion,
    sid: session._id.toString(),
  });
  session.refreshTokenHash = await bcrypt.hash(refreshToken, REFRESH_SALT_ROUNDS);
  await session.save();

  return { user, accessToken, refreshToken };
}

export async function refresh(refreshToken: string) {
  let payload: { sub: string; tokenVersion: number; sid: string };
  try {
    payload = verifyRefreshToken(refreshToken);
  } catch {
    const err = new Error('Invalid refresh token') as any;
    err.statusCode = 401;
    err.code = 'REFRESH_TOKEN_INVALID';
    throw err;
  }

  const user = await UserModel.findById(payload.sub);
  if (!user) {
    const err = new Error('Invalid refresh token') as any;
    err.statusCode = 401;
    err.code = 'REFRESH_TOKEN_INVALID';
    throw err;
  }

  // tokenVersion is a global revocation lever; mismatch means revoke was triggered.
  if (payload.tokenVersion !== user.tokenVersion) {
    const err = new Error('Invalid refresh token') as any;
    err.statusCode = 401;
    err.code = 'REFRESH_TOKEN_INVALID';
    throw err;
  }

  const session = await SessionModel.findOne({
    _id: payload.sid,
    userId: user._id,
    revokedAt: null,
  });
  if (!session) {
    const err = new Error('Invalid refresh token') as any;
    err.statusCode = 401;
    err.code = 'REFRESH_TOKEN_INVALID';
    throw err;
  }

  const match = await bcrypt.compare(refreshToken, session.refreshTokenHash);
  if (!match) {
    // Reuse/breach signal: revoke all sessions for this user.
    user.tokenVersion += 1;
    await user.save();
    await SessionModel.updateMany({ userId: user._id, revokedAt: null }, { revokedAt: new Date() });

    const err = new Error('Refresh token reuse detected') as any;
    err.statusCode = 401;
    err.code = 'REFRESH_TOKEN_INVALID';
    throw err;
  }

  const newAccessToken = signAccessToken({ sub: user._id.toString(), role: user.role });
  const newRefreshToken = signRefreshToken({
    sub: user._id.toString(),
    tokenVersion: user.tokenVersion,
    sid: session._id.toString(),
  });

  session.refreshTokenHash = await bcrypt.hash(newRefreshToken, REFRESH_SALT_ROUNDS);
  session.lastUsedAt = new Date();
  await session.save();

  return { user, accessToken: newAccessToken, refreshToken: newRefreshToken };
}

export async function logout(userId: string, sessionId?: string) {
  if (sessionId) {
    await SessionModel.updateOne({ _id: sessionId, userId, revokedAt: null }, { revokedAt: new Date() });
    return;
  }
  await SessionModel.updateMany({ userId, revokedAt: null }, { revokedAt: new Date() });
}

