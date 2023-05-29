// src/app.ts

import express from 'express'
import logger from 'morgan'
import { AuthController } from './infrastructure/http/controllers/AuthController';
import { LoginUseCase } from './application/usecases/authentication/LoginUseCase';
import { AuthService } from './application/services/AuthService';
import connectDatabase from './infrastructure/database/connection';


const app = express(); 

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(logger('dev'))


// Connect to the database
connectDatabase();

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
