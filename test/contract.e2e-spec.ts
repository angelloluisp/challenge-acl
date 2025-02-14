import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "../src/app.module";

describe("ContractController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("/contract (POST)", () => {
    return request(app.getHttpServer())
      .post("/contract")
      .send({
        clientName: "Kerry King",
        email: "example@test.com",
        accountNumber: "00233443",
        amount: 123330,
        currency: "USD",
        initialDate: "2023-10-15T12:00:00.000Z",
      })
      .expect(201);
  });

  it("/contractList (GET)", () => {
    return request(app.getHttpServer())
      .get("/contract/contractList?accountNumber=00233443")
      .expect(200);
  });
});
