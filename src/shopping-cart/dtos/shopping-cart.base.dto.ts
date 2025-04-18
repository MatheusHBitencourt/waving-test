import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsDate, IsOptional, IsString, IsUUID } from 'class-validator';

@Exclude()
export class ShoppingCartBaseDto {
  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsDate()
  createdAt: Date;

  @Expose()
  @IsOptional()
  @IsDate()
  updatedAt?: Date;

  @Expose()
  @IsString()
  userId: string;

  @Expose()
  @IsArray()
  @IsOptional()
  cartItem?: Object[];
}
