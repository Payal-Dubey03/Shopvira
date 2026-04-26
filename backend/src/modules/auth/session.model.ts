import mongoose, { Schema, type InferSchemaType } from 'mongoose';

const sessionSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    refreshTokenHash: { type: String, required: true },
    userAgent: { type: String, default: null },
    ip: { type: String, default: null },
    lastUsedAt: { type: Date, default: () => new Date() },
    revokedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export type Session = InferSchemaType<typeof sessionSchema>;
export const SessionModel = mongoose.model<Session>('Session', sessionSchema);

