import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { HealthModule } from "@/app/health/health.module";

import { LoggerModule } from "@/shared/logger/logger.module";

import { BrandModule } from "@/contexts/brand/brand.module";
import { CategoryModule } from "@/contexts/category/category.module";
import { UserPreferencesModule } from "@/contexts/user-preferences/user-preferences.module";
import { UserModule } from "@/contexts/users/user.module";

import { PrismaService } from "../prisma/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    HealthModule,
    UserModule,
    BrandModule, // Add BrandModule to imports
    CategoryModule, // Add CategoryModule to imports
    UserPreferencesModule, // Add UserPreferencesModule to imports
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
