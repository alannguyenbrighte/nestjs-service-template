import { Controller, Get, Logger } from "@nestjs/common";

import { UserPreferencesService } from "./user-preferences.service";

@Controller("preferences")
export class UserPreferencesController {
  constructor(
    private readonly userPreferencesService: UserPreferencesService,
    private readonly logger: Logger,
  ) {}

  @Get()
  async getUserPreferences() {
    try {
      return await this.userPreferencesService.getUserPreferences();
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
