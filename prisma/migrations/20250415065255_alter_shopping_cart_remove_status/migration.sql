/*
  Warnings:

  - You are about to drop the column `status` on the `shopping_cart` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELED');

-- AlterTable
ALTER TABLE "shopping_cart" DROP COLUMN "status";

-- DropEnum
DROP TYPE "CartStatus";
