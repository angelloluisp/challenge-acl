import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ContractService } from "../../application/services/contract.service";
import { Contract } from "../../domain/entities/contract.entity";

@Controller("contract")
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Post()
  async createContract(@Body() data: Contract) {
    return this.contractService.createContract(data);
  }

  @Get("contractList")
  async getContracts(
    @Query("accountNumber") accountNumber: string,
    @Query("startDate") startDate: string,
    @Query("endDate") endDate: string,
  ) {
    return this.contractService.getContracts({
      accountNumber,
      startDate,
      endDate,
    });
  }
}
