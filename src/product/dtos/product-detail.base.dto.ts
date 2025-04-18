import { Exclude, Expose } from 'class-transformer';
import {
  IsOptional,
  IsString,
  IsUUID,
  IsDate,
  IsInt,
} from 'class-validator';

@Exclude()
export class ProductDetailBaseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsOptional()
  @IsString()
  origin?: string;

  @Expose()
  @IsOptional()
  @IsString()
  label?: string;

  @Expose()
  @IsOptional()
  @IsString()
  dimensions?: string;

  @Expose()
  @IsOptional()
  @IsString()
  version?: string;

  @Expose()
  @IsOptional()
  @IsString()
  weight?: string;

  @Expose()
  @IsOptional()
  @IsString()
  color?: string;

  @Expose()
  @IsOptional()
  @IsString()
  material?: string;

  @Expose()
  @IsDate()
  createdAt: string;

  @Expose()
  @IsOptional()
  @IsDate()
  updatedAt?: string;

  @Expose()
  @IsInt()
  productCode: number;
}
