import { Inject, Injectable, Logger } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class UserPreferencesService {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private readonly prisma: PrismaService,
  ) {}

  async getUserPreferences() {
    try {
      return await this.prisma.user_preferences.findMany();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(
          `Failed to get user preferences: ${error.message}`,
          error.stack,
        );
        throw new TypeError(`Failed to get user preferences: ${error.message}`);
      }
      this.logger.error("Failed to get user preferences", String(error));
      throw new Error("Failed to get user preferences");
    }
  }
}
