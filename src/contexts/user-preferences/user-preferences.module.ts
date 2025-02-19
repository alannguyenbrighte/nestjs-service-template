import { Module } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";
import { UserPreferencesController } from "./user-preferences.controller";
import { UserPreferencesService } from "./user-preferences.service";

@Module({
  controllers: [UserPreferencesController],
  providers: [UserPreferencesService, PrismaService],
  exports: [UserPreferencesService],
})
export class UserPreferencesModule {}
