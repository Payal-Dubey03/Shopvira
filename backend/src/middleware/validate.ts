import type { NextFunction, Request, Response } from 'express';
import type { ZodError, ZodSchema } from 'zod';

type Location = 'body' | 'query' | 'params';

function toFieldErrors(zodError: ZodError) {
  const fields: Record<string, string[]> = {};
  for (const issue of zodError.issues) {
    const key = issue.path.join('.') || 'root';
    fields[key] = fields[key] ?? [];
    fields[key].push(issue.message);
  }
  return fields;
}

export function validate(schema: ZodSchema, location: Location = 'body') {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[location]);
    if (result.success) {
      if (location === 'query') {
        // Mutate the existing query object to avoid getter errors
        for (const key in req.query) {
          delete req.query[key];
        }
        Object.assign(req.query, result.data);
      } else {
        (req as any)[location] = result.data;
      }
      return next();
    }
    const err = new Error('Validation failed') as any;
    err.statusCode = 400;
    err.code = 'VALIDATION_ERROR';
    err.fields = toFieldErrors(result.error);
    return next(err);
  };
}

