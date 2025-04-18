import { Body, Controller, Get, Param, Put } from '@nestjs/common';
import { ProductDetailBaseDto } from '../dtos/product-detail.base.dto';
import { UpdateProductDetailDto } from '../dtos/update-product-detail.dto';
import { ProductDetailService } from '../services/product-detail.service';

@Controller('product-detail')
export class ProductDetailController {
  constructor(private readonly service: ProductDetailService) {}

  @Get(':code')
  async getProductDetailByCode(
    @Param('code') code: string,
  ): Promise<ProductDetailBaseDto> {
    const parsedCode = parseInt(code);
    return this.service.getProductDetailByCode(parsedCode);
  }

  @Put(':code')
  async updateProductDetailByCode(
    @Param('code') code: string,
    @Body() productDetail: UpdateProductDetailDto,
  ): Promise<ProductDetailBaseDto> {
    return this.service.updateProductDetailByCode(
      parseInt(code),
      productDetail,
    );
  }
}
