import { Module } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service"; // Corrected import path
import { UserController } from "./api/user.controller"; // Import UserController
import { UserService } from "./user.service";

@Module({
  providers: [UserService, PrismaService], // Add PrismaService to providers
  controllers: [UserController], // Declare UserController as a controller
  exports: [UserService],
})
export class UserModule {}

// filepath: /c:/Users/AlanNguyen/development/nestjs-template/src/contexts/users/user.module.ts
