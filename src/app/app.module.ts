import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HealthModule } from '@/app/health/health.module';
import { LoggerModule } from '@/shared/logger/logger.module';
import { UserModule } from '@/contexts/users/user.module';
import { BrandModule } from '@/contexts/brand/brand.module'; // Import BrandModule
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, cache: true }),
    LoggerModule,
    HealthModule,
    UserModule,
    BrandModule, // Add BrandModule to imports
  ],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
