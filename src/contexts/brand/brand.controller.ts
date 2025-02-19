import {
  // Body,
  Controller,
  // Delete,
  Get,
  HttpCode,
  Inject,
  Logger,
  // Param,
  // Post,
  // Put,
  // UseGuards,
} from "@nestjs/common";

// import { FirebaseAuthGuard } from "../../../auth/firebase-auth.guard";
import { BrandService } from "./brand.service";

@Controller("brands")
export class BrandController {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private readonly brandService: BrandService, // Define userService here
  ) {}

  @Get()
  @HttpCode(200)
  async getBrands() {
    this.logger.log("getBrands method called"); // Debugging statement
    try {
      const brands = await this.brandService.getBrands();
      this.logger.log("Brands retrieved successfully"); // Debugging statement
      return brands;
    } catch (error) {
      this.logger.error("Failed to retrieve brands", (error as Error).stack); // Error logging
      throw error;
    }
  }
}
