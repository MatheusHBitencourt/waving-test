import { Exclude, Expose } from 'class-transformer';
import {
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Min
} from 'class-validator';

@Exclude()
export class CreateCartItemDto {
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
}
