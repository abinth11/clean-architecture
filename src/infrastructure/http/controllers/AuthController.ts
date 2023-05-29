// src/infrastructure/http/controllers/AuthController.ts

import { Request, Response } from 'express';
import { LoginUseCase } from '../../../application/usecases/authentication/LoginUseCase';

export class AuthController {
  constructor(private loginUseCase: LoginUseCase) {}

  async login(req: Request, res: Response): Promise<void> {
    try {
      console.log(req.body)
      const { email, password } = req.body;
      const loginRequest = { email, password };
      const loginResponse = await this.loginUseCase.execute(loginRequest);

      res.status(200).json(loginResponse);
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
