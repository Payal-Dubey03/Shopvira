import type { Request, Response, NextFunction } from 'express';
import { env } from '../../config/env';
import * as AuthService from './auth.service';
import { verifyRefreshToken } from '../../utils/jwt';

function setRefreshCookie(res: Response, token: string) {
  res.cookie('refreshToken', token, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/api/v1/auth',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

function clearRefreshCookie(res: Response) {
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/api/v1/auth',
  });
}

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await AuthService.register(req.body.email, req.body.password);
    return res.status(201).json({
      success: true,
      data: { user: { _id: user._id, email: user.email, role: user.role } },
    });
  } catch (e) {
    return next(e);
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { user, accessToken, refreshToken } = await AuthService.login(req.body.email, req.body.password, {
      userAgent: req.get('user-agent'),
      ip: req.ip,
    });
    setRefreshCookie(res, refreshToken);
    return res.status(200).json({
      success: true,
      data: { accessToken, user: { _id: user._id, email: user.email, role: user.role } },
    });
  } catch (e) {
    return next(e);
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) {
      const err = new Error('Missing refresh token') as any;
      err.statusCode = 401;
      err.code = 'REFRESH_TOKEN_INVALID';
      throw err;
    }

    const { user, accessToken, refreshToken } = await AuthService.refresh(token);
    setRefreshCookie(res, refreshToken);
    return res.status(200).json({
      success: true,
      data: { accessToken, user: { _id: user._id, email: user.email, role: user.role } },
    });
  } catch (e) {
    clearRefreshCookie(res);
    return next(e);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies?.refreshToken;
    if (token) {
      // Best effort logout: if refresh is present, invalidate the stored session.
      const { sub, sid } = verifyRefreshToken(token);
      await AuthService.logout(sub, sid);
    }
    clearRefreshCookie(res);
    return res.status(200).json({ success: true, data: {} });
  } catch (e) {
    clearRefreshCookie(res);
    return next(e);
  }
}

