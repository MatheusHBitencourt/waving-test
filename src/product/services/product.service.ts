import { Injectable } from '@nestjs/common';
import { imageUnavailable } from '../../constants/constants';
import { CreateProductDto } from '../dtos/create-product.dto';
import { ProductBaseDto } from '../dtos/product.base.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { ProductRepository } from '../repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async createProduct(product: CreateProductDto): Promise<ProductBaseDto> {
    const builtProduct = product.image
      ? product
      : { ...product, image: imageUnavailable };

    return this.repository.createProduct(builtProduct);
  }

  async getProducts(): Promise<ProductBaseDto[]> {
    return this.repository.getProducts();
  }

  async getProductById(id: string): Promise<ProductBaseDto> {
    return this.repository.getProductById(id);
  }

  async updateProductById(
    id: string,
    product: UpdateProductDto,
  ): Promise<ProductBaseDto> {
    return this.repository.updateProductById(id, product);
  }

  async deleteProductById(id: string): Promise<ProductBaseDto> {
    return this.repository.deleteProductById(id);
  }
}
