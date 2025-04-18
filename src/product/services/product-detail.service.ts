import { Injectable } from '@nestjs/common';
import { UpdateProductDetailDto } from '../dtos/update-product-detail.dto';
import { ProductDetailRepository } from '../repositories/product-detail.repository';

@Injectable()
export class ProductDetailService {
  constructor(private readonly repository: ProductDetailRepository) {}

  async getProductDetailByCode(code: number): Promise<any> {
    return this.repository.getProductDetailByCode(code);
  }

  async updateProductDetailByCode(
    code: number,
    productDetail: UpdateProductDetailDto,
  ): Promise<any> {
    return this.repository.updateProductDetailByCode(code, productDetail);
  }
}
