import { Module } from '@nestjs/common';
import { ProductService } from './services/product.service';
import { ProductController } from './controllers/product.controller';
import { ProductRepository } from './repositories/product.repository';
import { ProductDetailRepository } from './repositories/product-detail.repository';
import { ProductDetailController } from './controllers/product-detail.controller';
import { ProductDetailService } from './services/product-detail.service';

@Module({
  controllers: [ProductController, ProductDetailController],
  providers: [
    ProductService,
    ProductDetailService,
    ProductRepository,
    ProductDetailRepository,
  ],
})
export class ProductModule {}
