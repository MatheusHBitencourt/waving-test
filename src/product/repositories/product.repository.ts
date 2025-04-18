import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductBaseDto } from '../dtos/product.base.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createProduct(data: CreateProductDto): Promise<ProductBaseDto> {
    const product = await this.prisma.product.create({ data });

    await this.prisma.productDetail.create({
      data: { productCode: product.code },
    });

    return plainToInstance(ProductBaseDto, product);
  }

  async getProducts(): Promise<ProductBaseDto[]> {
    const products = await this.prisma.product.findMany();

    return plainToInstance(ProductBaseDto, products);
  }

  async getProductById(id: string): Promise<ProductBaseDto> {
    const product = await this.prisma.product.findUnique({ where: { id } });

    return plainToInstance(ProductBaseDto, product);
  }

  async updateProductById(
    id: string,
    data: UpdateProductDto,
  ): Promise<ProductBaseDto> {
    const product = await this.prisma.product.update({
      where: { id },
      data,
    });

    return plainToInstance(ProductBaseDto, product);
  }

  async deleteProductById(id: string): Promise<ProductBaseDto> {
    const product = await this.prisma.product.delete({
      where: { id },
    });

    return plainToInstance(ProductBaseDto, product);
  }
}
