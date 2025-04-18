import { plainToInstance } from 'class-transformer';
import { ShoppingCartBaseDto } from '../../dtos/shopping-cart.base.dto';

export function shoppingCartBaseFixture(
  props: Partial<ShoppingCartBaseDto> = {},
): ShoppingCartBaseDto {
  const defaultValues: ShoppingCartBaseDto = {
    id: 'b17f9e84-d5e1-4f4a-a75a-1f3f472e4d1b',
    createdAt: new Date('2024-04-18T10:00:00.000Z'),
    updatedAt: new Date('2024-04-18T10:00:00.000Z'),
    userId: 'dc77a22f-fa31-46d3-82da-6d67ea5e5b2a',
    cartItem: [],
  };

  return plainToInstance(ShoppingCartBaseDto, {
    ...defaultValues,
    ...props,
  });
}
