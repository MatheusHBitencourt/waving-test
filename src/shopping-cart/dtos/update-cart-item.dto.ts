import { Exclude, Expose } from 'class-transformer';
import { IsInt, IsNumber, Min } from 'class-validator';

@Exclude()
export class UpdateCartItemDto {
  @Expose()
  @IsInt()
  @Min(1)
  quantity: number;

  @Expose()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  unitPrice: number;
}
