import { Request, Response, NextFunction } from 'express';
import authService from '../services/auth-service';

export class AuthController {
  async signup(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const output = await authService.signup(user.email, user.password);
    res.status(201).json(output);
  }

  async signin(req: Request, res: Response, next: NextFunction): Promise<void> {
    const user = {
      email: req.body.email,
      password: req.body.password,
    };

    const output = await authService.signin(user.email, user.password);
    res.status(200).json(output);
  }
}
