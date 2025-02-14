import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PrismaModule } from "./infrastructure/prisma/prisma.module";
import { ContractService } from "./application/services/contract.service";
import { ContractController } from "./interfaces/contract/contract.controller";

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class AppModule {}
