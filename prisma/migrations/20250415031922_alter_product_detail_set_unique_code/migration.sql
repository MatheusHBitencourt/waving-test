/*
  Warnings:

  - A unique constraint covering the columns `[product_code]` on the table `product_detail` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "product_detail_product_code_key" ON "product_detail"("product_code");
