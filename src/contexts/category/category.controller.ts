import { Controller, Get, HttpCode, Inject, Logger } from "@nestjs/common";

import { CategoryService } from "./category.service";

@Controller("categories")
export class CategoryController {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private readonly categoryService: CategoryService,
  ) {}

  @Get()
  @HttpCode(200)
  async getCategories() {
    this.logger.log("getCategories method called");
    try {
      const categories = await this.categoryService.getCategories();
      this.logger.log("Categories retrieved successfully");
      return categories;
    } catch (error) {
      this.logger.error(
        "Failed to retrieve categories",
        (error as Error).stack,
      );
      throw error;
    }
  }
}
