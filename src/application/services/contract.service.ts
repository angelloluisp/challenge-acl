import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../infrastructure/prisma/prisma.service";
import { Contract } from "../../domain/entities/contract.entity";

@Injectable()
export class ContractService {
  constructor(private prisma: PrismaService) {}

  async createContract(data: Contract): Promise<Contract> {
    return this.prisma.contract.create({ data });
  }

  async getContracts(filters: {
    accountNumber?: string;
    startDate?: string;
    endDate?: string;
  }): Promise<Contract[]> {
    return this.prisma.contract.findMany({
      where: {
        accountNumber: filters.accountNumber
          ? filters.accountNumber
          : undefined,
        initialDate: {
          gte: filters.startDate ? new Date(filters.startDate) : undefined,
          lte: filters.endDate ? new Date(filters.endDate) : undefined,
        },
      },
    });
  }
}
