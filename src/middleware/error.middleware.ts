import { NextFunction, Request, Response } from 'express';

const error_middleware = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('iahdsfjaskdfjalskdfjalkdsfj');

  res.status(500).json({ message: error.message });
};

export default error_middleware;
