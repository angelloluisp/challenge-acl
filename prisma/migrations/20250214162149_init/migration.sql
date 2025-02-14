-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "clientName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "initialDate" TIMESTAMP(3) NOT NULL,
    "accountNumber" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "currency" TEXT NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);
