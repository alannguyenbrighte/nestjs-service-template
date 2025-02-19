import { Module } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service"; // Corrected import path
import { BrandController } from "./brand.controller"; // Import UserController
import { BrandService } from "./brand.service";

@Module({
  providers: [BrandService, PrismaService], // Add PrismaService to providers
  controllers: [BrandController], // Declare UserController as a controller
  exports: [BrandService],
})
export class BrandModule {}

// filepath: /c:/Users/AlanNguyen/development/nestjs-template/src/contexts/users/user.module.ts
