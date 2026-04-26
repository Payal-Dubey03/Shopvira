import type { Request, Response, NextFunction } from 'express';
import { UserModel } from './user.model';
import { SessionModel } from '../auth/session.model';

export async function me(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user?._id) {
      const err = new Error('Unauthorized') as any;
      err.statusCode = 401;
      err.code = 'UNAUTHORIZED';
      throw err;
    }

    const user = await UserModel.findById(req.user._id).select('_id email role createdAt').lean();
    if (!user) {
      const err = new Error('User not found') as any;
      err.statusCode = 404;
      err.code = 'NOT_FOUND';
      throw err;
    }

    return res.status(200).json({ success: true, data: user });
  } catch (e) {
    return next(e);
  }
}

export async function listSessions(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user?._id) {
      const err = new Error('Unauthorized') as any;
      err.statusCode = 401;
      err.code = 'UNAUTHORIZED';
      throw err;
    }

    const sessions = await SessionModel.find({ userId: req.user._id })
      .select('_id createdAt lastUsedAt revokedAt userAgent ip')
      .sort({ createdAt: -1 })
      .lean();

    return res.status(200).json({ success: true, data: sessions });
  } catch (e) {
    return next(e);
  }
}

export async function revokeSession(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.user?._id) {
      const err = new Error('Unauthorized') as any;
      err.statusCode = 401;
      err.code = 'UNAUTHORIZED';
      throw err;
    }

    const { id } = req.params;
    const updated = await SessionModel.findOneAndUpdate(
      { _id: id, userId: req.user._id, revokedAt: null },
      { revokedAt: new Date() },
      { new: true }
    ).lean();

    if (!updated) {
      const err = new Error('Session not found') as any;
      err.statusCode = 404;
      err.code = 'NOT_FOUND';
      throw err;
    }

    return res.status(200).json({ success: true, data: {} });
  } catch (e) {
    return next(e);
  }
}

