// src/app.ts

import express from 'express';
import { AuthController } from './infrastructure/http/controllers/AuthController';
import { LoginUseCase } from './application/usecases/authentication/LoginUseCase';
import { AuthService } from './application/services/AuthService';

const app = express();

// Create instances of required classes
const authService = new AuthService();
const loginUseCase = new LoginUseCase(authService);
const authController = new AuthController(loginUseCase);

// Define routes
app.post('/login', authController.login.bind(authController));

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
