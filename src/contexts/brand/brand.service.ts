import { Inject, Injectable, Logger } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service"; // Import PrismaService
@Injectable()
export class BrandService {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private prisma: PrismaService,
  ) {} // Inject PrismaService

  async getBrands() {
    try {
      return await this.prisma.brands.findMany();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Failed to get brands: ${error.message}`,
          error.stack,
        );
        throw new TypeError(`Failed to get brands: ${error.message}`);
      }
      this.logger.error("Failed to get brands", String(error));
      throw new Error("Failed to get brands");
    }
  }
}
