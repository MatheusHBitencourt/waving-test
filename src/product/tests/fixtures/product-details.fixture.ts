import { plainToInstance } from 'class-transformer';
import { ProductDetailBaseDto } from '../../dtos/product-detail.base.dto';
import { UpdateProductDetailDto } from '../../dtos/update-product-detail.dto';

export function productDetailBaseFixture(
  props: Partial<ProductDetailBaseDto> = {},
): ProductDetailBaseDto {
  const defaultValues: ProductDetailBaseDto = {
    id: 'b74a5d18-ff9f-4e4a-9c82-1e4e8f4c50fd',
    origin: 'Brazil',
    label: 'Product A',
    dimensions: '10x20x30 cm',
    version: 'v1.0',
    weight: '1.5kg',
    color: 'Red',
    material: 'Aluminum',
    createdAt: '2024-04-15T14:00:00.000Z',
    updatedAt: '2024-04-15T14:00:00.000Z',
    productCode: 123456,
  };

  return plainToInstance(ProductDetailBaseDto, {
    ...defaultValues,
    ...props,
  });
}

export function updateProductDetailFixture(
  props: Partial<UpdateProductDetailDto> = {},
): UpdateProductDetailDto {
  const defaultValues: UpdateProductDetailDto = {
    origin: 'Brazil',
    label: 'Product A',
    dimensions: '10x20x30 cm',
    version: 'v1.0',
    weight: '1.5kg',
    color: 'Red',
    material: 'Aluminum',
  };

  return plainToInstance(UpdateProductDetailDto, {
    ...defaultValues,
    ...props,
  });
}
