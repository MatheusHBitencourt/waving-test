import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductBaseDto } from '../dtos/product.base.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Get()
  async getProducts(): Promise<ProductBaseDto[]> {
    return this.service.getProducts();
  }

  @Post()
  async createProduct(
    @Body() product: CreateProductDto,
  ): Promise<ProductBaseDto> {
    return this.service.createProduct(product);
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<ProductBaseDto> {
    return this.service.getProductById(id);
  }

  @Put(':id')
  async updateProductById(
    @Param('id') id: string,
    @Body() product: UpdateProductDto,
  ): Promise<ProductBaseDto> {
    return this.service.updateProductById(id, product);
  }

  @Delete(':id')
  async deleteProductById(@Param('id') id: string): Promise<ProductBaseDto> {
    return this.service.deleteProductById(id);
  }
}
