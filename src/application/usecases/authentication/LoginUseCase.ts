// src/application/usecases/authentication/LoginUseCase.ts

import { LoginRequest } from './LoginRequest';
import { LoginResponse } from './LoginResponse';
import { AuthService } from '../../services/AuthService';

export class LoginUseCase {
  constructor(private authService: AuthService) {}

  async execute(request: LoginRequest): Promise<LoginResponse> {
    const { email, password } = request;
    const token = await this.authService.login(email, password);
    const userId = await this.authService.getUserId(email);
    
    return { token, userId };
  }
}
