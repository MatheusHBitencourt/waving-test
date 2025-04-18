import { Injectable } from '@nestjs/common';
import { CartItemRepository } from '../repositories/cart-item.repository';
import { UpdateCartItemDto } from '../dtos/update-cart-item.dto';
import { CartItemBaseDto } from '../dtos/cart-item-base.dto';
import { CreateCartItemDto } from '../dtos/create-cart-item.dto';

@Injectable()
export class CartItemService {
  constructor(private readonly repository: CartItemRepository) {}

  async createCartItem(shoppingCart: CreateCartItemDto): Promise<any> {
    return this.repository.createCartItem(shoppingCart);
  }

  // async getCartItems(): Promise<any> {
  //   return this.repository.getCartItems();
  // }

  // async getCartItemById(id: string): Promise<any> {
  //   return this.repository.getCartItemByProductId(id);
  // }

  async updateCartItemById(id: string, cartItem: UpdateCartItemDto): Promise<CartItemBaseDto> {
    return this.repository.updateCartItemById(id, cartItem);
  }

  async deleteCartItemById(id: string): Promise<CartItemBaseDto> {
    return this.repository.deleteCartItemById(id);
  }
}
