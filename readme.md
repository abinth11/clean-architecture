backend/
├── src/
│   ├── application/
│   │   ├── usecases/
│   │   │   ├── authentication/
│   │   │   │   ├── LoginRequest.ts
│   │   │   │   ├── LoginResponse.ts
│   │   │   │   ├── LoginUseCase.ts
│   │   │   │   └── ...
│   │   │   ├── user/
│   │   │   │   ├── RegisterRequest.ts
│   │   │   │   ├── RegisterResponse.ts
│   │   │   │   ├── RegisterUseCase.ts
│   │   │   │   └── ...
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── AuthService.ts
│   │   │   ├── UserService.ts
│   │   │   └── ...
│   │   └── ...
│   ├── domain/
│   │   ├── entities/
│   │   │   ├── User.ts
│   │   │   └── ...
│   │   ├── repositories/
│   │   │   ├── UserRepository.ts
│   │   │   └── ...
│   │   ├── value-objects/
│   │   │   ├── Email.ts
│   │   │   └── ...
│   │   └── ...
│   ├── infrastructure/
│   │   ├── database/
│   │   │   ├── models/
│   │   │   │   ├── User.ts
│   │   │   │   └── ...
│   │   │   └── repositories/
│   │   │       ├── MongoUserRepository.ts
│   │   │       └── ...
│   │   ├── http/
│   │   │   ├── controllers/
│   │   │   │   ├── AuthController.ts
│   │   │   │   └── UserController.ts
│   │   │   ├── middlewares/
│   │   │   │   └── AuthenticationMiddleware.ts
│   │   │   └── ...
│   │   └── ...
│   ├── interfaces/
│   │   ├── controllers/
│   │   │   ├── IAuthController.ts
│   │   │   ├── IUserController.ts
│   │   │   └── ...
│   │   ├── repositories/
│   │   │   ├── IUserRepository.ts
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── IAuthService.ts
│   │   │   ├── IUserService.ts
│   │   │   └── ...
│   │   └── ...
│   ├── config/
│   │   └── ...
│   ├── app.ts
│   └── index.ts
├── .env.example
├── .eslintrc.js
├── .gitignore
├── .prettierrc
├── jest.config.js
├── nodemon.json
├── package.json
└── tsconfig.json
