/*
  Warnings:

  - Added the required column `address` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "product" ADD COLUMN     "image" TEXT,
ALTER COLUMN "price" SET DEFAULT 0.00;

-- AlterTable
ALTER TABLE "product_detail" ADD COLUMN     "color" VARCHAR(100),
ADD COLUMN     "material" VARCHAR(100),
ADD COLUMN     "weight" VARCHAR(10),
ALTER COLUMN "origin" DROP NOT NULL,
ALTER COLUMN "label" DROP NOT NULL,
ALTER COLUMN "dimension" DROP NOT NULL,
ALTER COLUMN "version" DROP NOT NULL,
ALTER COLUMN "version" SET DATA TYPE VARCHAR(100);

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "address" VARCHAR(200) NOT NULL,
ADD COLUMN     "password" VARCHAR(512) NOT NULL;
