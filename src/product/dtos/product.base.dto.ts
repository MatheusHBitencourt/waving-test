import { Exclude, Expose } from 'class-transformer';
import {
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  Min
} from 'class-validator';

@Exclude()
export class ProductBaseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  @MaxLength(200)
  name: string;

  @Expose()
  @IsInt()
  @IsPositive()
  code?: number;

  @Expose()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @Expose()
  @IsString()
  description: string;

  @Expose()
  @IsOptional()
  @IsString()
  image?: string;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
