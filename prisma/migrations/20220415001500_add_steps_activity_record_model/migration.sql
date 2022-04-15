-- CreateTable
CREATE TABLE "StepsActivityRecord" (
    "id" TEXT NOT NULL,
    "stepsCount" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "userRecordsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StepsActivityRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "StepsActivityRecord" ADD CONSTRAINT "StepsActivityRecord_userRecordsId_fkey" FOREIGN KEY ("userRecordsId") REFERENCES "UserRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
