import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProductDetailDto } from '../dtos/update-product-detail.dto';

@Injectable()
export class ProductDetailRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getProductDetailByCode(productCode: number): Promise<any> {
    return this.prisma.productDetail.findUnique({ where: { productCode } });
  }

  async updateProductDetailByCode(
    code: number,
    productDetail: UpdateProductDetailDto,
  ): Promise<any> {
    return this.prisma.productDetail.update({
      where: { productCode: code },
      data: { ...productDetail },
    });
  }
}
