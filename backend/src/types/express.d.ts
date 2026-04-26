declare namespace Express {
  export interface Request {
    user?: {
      _id: string;
      role: 'customer' | 'admin' | 'super_admin';
    };
  }
}

