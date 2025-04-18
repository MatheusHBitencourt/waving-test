import { OmitType } from '@nestjs/swagger';
import { ProductBaseDto } from './product.base.dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateProductDto extends OmitType(ProductBaseDto, [
  'id',
  'code',
  'createdAt',
  'updatedAt',
] as const) {}
