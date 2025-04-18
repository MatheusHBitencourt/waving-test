import { Injectable } from '@nestjs/common';
import { ShoppingCartRepository } from '../repositories/shopping-cart.repository';
import { ShoppingCartBaseDto } from '../dtos/shopping-cart.base.dto';

@Injectable()
export class ShoppingCartService {
  constructor(private readonly repository: ShoppingCartRepository) {}

  async getShoppingCartByUser(userId: string): Promise<ShoppingCartBaseDto> {
    return this.repository.getShoppingCartByUser(userId);
  }
}
