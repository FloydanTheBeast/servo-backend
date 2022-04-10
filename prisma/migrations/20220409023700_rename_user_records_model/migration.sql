/*
  Warnings:

  - You are about to drop the `UserRecords` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FinancialRecord" DROP CONSTRAINT "FinancialRecord_userRecordsId_fkey";

-- DropForeignKey
ALTER TABLE "UserRecords" DROP CONSTRAINT "UserRecords_userId_fkey";

-- DropTable
DROP TABLE "UserRecords";

-- CreateTable
CREATE TABLE "UserRecord" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserRecord_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRecord_userId_key" ON "UserRecord"("userId");

-- AddForeignKey
ALTER TABLE "UserRecord" ADD CONSTRAINT "UserRecord_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FinancialRecord" ADD CONSTRAINT "FinancialRecord_userRecordsId_fkey" FOREIGN KEY ("userRecordsId") REFERENCES "UserRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
