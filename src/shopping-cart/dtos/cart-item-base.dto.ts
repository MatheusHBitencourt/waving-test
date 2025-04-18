import { Exclude, Expose } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Min,
} from 'class-validator';

@Exclude()
export class CartItemBaseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  shoppingCartId: string;

  @Expose()
  @IsString()
  productId: string;

  @Expose()
  @IsInt()
  @Min(1)
  quantity: number;

  @Expose()
  @IsNumber()
  @IsPositive()
  unitPrice: number;

  @Expose()
  @IsNumber()
  @Min(0)
  totalPrice: number;

  @Expose()
  @IsDate()
  createdAt: string;

  @Expose()
  @IsOptional()
  @IsDate()
  updatedAt?: string;

  @Expose()
  @IsOptional()
  @IsArray()
  product?: Object[];
}
