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
import { UserService } from "../user.service";

@Controller("users")
export class UserController {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private readonly userService: UserService, // Define userService here
  ) {}

  @Get()
  @HttpCode(200)
  async getUsers() {
    this.logger.log("getUsers method called"); // Debugging statement
    try {
      const users = await this.userService.getUsers();
      this.logger.log("Users retrieved successfully"); // Debugging statement
      return users;
    } catch (error) {
      this.logger.error("Failed to retrieve users", (error as Error).stack); // Error logging
      throw error;
    }
  }
}
