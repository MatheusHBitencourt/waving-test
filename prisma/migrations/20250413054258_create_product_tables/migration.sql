-- CreateTable
CREATE TABLE "product" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "code" SERIAL NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "product_detail" (
    "id" TEXT NOT NULL,
    "origin" VARCHAR(100) NOT NULL,
    "label" VARCHAR(200) NOT NULL,
    "dimension" VARCHAR(100) NOT NULL,
    "version" VARCHAR(30) NOT NULL,
    "product_code" INTEGER NOT NULL,

    CONSTRAINT "product_detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_code_key" ON "product"("code");

-- AddForeignKey
ALTER TABLE "product_detail" ADD CONSTRAINT "product_detail_product_code_fkey" FOREIGN KEY ("product_code") REFERENCES "product"("code") ON DELETE CASCADE ON UPDATE CASCADE;
