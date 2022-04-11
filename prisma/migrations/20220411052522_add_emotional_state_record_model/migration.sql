-- CreateEnum
CREATE TYPE "EmotionalState" AS ENUM ('SAD', 'NORMAL', 'HAPPY');

-- CreateTable
CREATE TABLE "EmotionalStateRecord" (
    "id" TEXT NOT NULL,
    "state" "EmotionalState" NOT NULL,
    "description" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "userRecordsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmotionalStateRecord_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EmotionalStateRecord" ADD CONSTRAINT "EmotionalStateRecord_userRecordsId_fkey" FOREIGN KEY ("userRecordsId") REFERENCES "UserRecord"("id") ON DELETE SET NULL ON UPDATE CASCADE;
