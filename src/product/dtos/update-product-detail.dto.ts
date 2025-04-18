import { OmitType, PartialType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { CreateProductDetailDto } from './create-product-detail.dto';

@Exclude()
export class UpdateProductDetailDto extends OmitType(CreateProductDetailDto, [
  'productCode',
]) {}
