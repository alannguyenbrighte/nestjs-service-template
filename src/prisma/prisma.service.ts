import {
  INestApplication,
  Injectable,
  Logger,
  OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(PrismaService.name);

  async onModuleInit() {
    await this.$connect();
  }

  enableShutdownHooks(app: INestApplication) {
    process.on("beforeExit", () => {
      app
        .close()
        .then(() => {
          // handle successful closure if needed
        })
        .catch((error: unknown) => {
          this.logger.error("Error during app shutdown", error);
        });
    });
  }
}
