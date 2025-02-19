import { Inject, Injectable, Logger } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class CategoryService {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private readonly prisma: PrismaService,
  ) {}

  async getCategories() {
    try {
      return await this.prisma.categories.findMany();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Failed to get categories: ${error.message}`,
          error.stack,
        );
        throw new TypeError(`Failed to get categories: ${error.message}`);
      }
      this.logger.error("Failed to get categories", String(error));
      throw new Error("Failed to get categories");
    }
  }
}
