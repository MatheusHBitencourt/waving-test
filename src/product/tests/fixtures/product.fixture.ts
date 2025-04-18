import { plainToInstance } from 'class-transformer';
import { ProductBaseDto } from '../../dtos/product.base.dto';
import { CreateProductDto } from '../../dtos/create-product.dto';
import { UpdateProductDto } from '../../dtos/update-product.dto';

export function productBaseFixture(
  props: Partial<ProductBaseDto> = {},
): ProductBaseDto {
  const defaultValues: ProductBaseDto = {
    id: 'b1f3c3c8-1234-4e21-a9d1-7b2c45e7d1ab',
    name: 'Standard Product',
    code: 1001,
    price: 49.99,
    description: 'A default product description for testing.',
    image: 'https://example.com/image.png',
    createdAt: new Date('2024-05-01T10:00:00.000Z'),
    updatedAt: new Date('2024-05-01T10:00:00.000Z'),
  };

  return plainToInstance(ProductBaseDto, {
    ...defaultValues,
    ...props,
  });
}

export function createProductFixture(
  props: Partial<CreateProductDto> = {},
): CreateProductDto {
  const defaultValues: CreateProductDto = {
    name: 'Standard Product',
    price: 49.99,
    description: 'A default product description for testing.',
    image: 'https://example.com/image.png',
  };

  return plainToInstance(CreateProductDto, {
    ...defaultValues,
    ...props,
  });
}

export function updateProductFixture(
  props: Partial<UpdateProductDto> = {},
): UpdateProductDto {
  const defaultValues: UpdateProductDto = {
    name: 'Standard Product',
    price: 49.99,
    description: 'A default product description for testing.',
    image: 'https://example.com/image.png',
  };

  return plainToInstance(UpdateProductDto, {
    ...defaultValues,
    ...props,
  });
}
