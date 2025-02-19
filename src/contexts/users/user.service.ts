import { Inject, Injectable, Logger } from "@nestjs/common";

import { PrismaService } from "../../prisma/prisma.service"; // Import PrismaService
@Injectable()
export class UserService {
  constructor(
    @Inject(Logger) private readonly logger: Logger,
    private prisma: PrismaService,
  ) {} // Inject PrismaService

  async getUsers() {
    try {
      return await this.prisma.users.findMany();
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.logger.error(`Failed to get users: ${error.message}`, error.stack);
        throw new TypeError(`Failed to get users: ${error.message}`);
      }
      this.logger.error("Failed to get users", String(error));
      throw new Error("Failed to get users");
    }
  }

  // async getUserById(id: number) {
  //   try {
  //     return await this.prisma.user.findUnique({
  //       where: { id },
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(`Failed to get user by id: ${error.message}`);
  //     }
  //     throw error;
  //   }
  // }

  // async createUser(data: { email: string; name?: string }) {
  //   try {
  //     return await this.prisma.user.create({
  //       data,
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(`Failed to create user: ${error.message}`);
  //     }
  //     throw error;
  //   }
  // }

  // async updateUser(id: number, data: { email?: string; name?: string }) {
  //   try {
  //     return await this.prisma.user.update({
  //       where: { id },
  //       data,
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(`Failed to update user: ${error.message}`);
  //     }
  //     throw error;
  //   }
  // }

  // async deleteUser(id: number) {
  //   try {
  //     return await this.prisma.user.delete({
  //       where: { id },
  //     });
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       throw new Error(`Failed to delete user: ${error.message}`);
  //     }
  //     throw error;
  //   }
  // }
}
// Removed the local declaration of Inject
