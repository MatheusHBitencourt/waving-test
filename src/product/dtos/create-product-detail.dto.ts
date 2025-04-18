import { OmitType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ProductDetailBaseDto } from './product-detail.base.dto';

@Exclude()
export class CreateProductDetailDto extends OmitType(ProductDetailBaseDto, [
  'id',
  'createdAt',
  'updatedAt',
] as const) {}
