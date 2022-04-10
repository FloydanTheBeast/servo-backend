-- CreateEnum
CREATE TYPE "FinancialOperation" AS ENUM ('LOAN', 'DEBT');

-- CreateTable
CREATE TABLE "FinancialRecord" (
    "id" TEXT NOT NULL,
    "type" "FinancialOperation" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3),
    "userRecordsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FinancialRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FinancialRecord" ADD CONSTRAINT "FinancialRecord_userRecordsId_fkey" FOREIGN KEY ("userRecordsId") REFERENCES "UserRecords"("id") ON DELETE SET NULL ON UPDATE CASCADE;
