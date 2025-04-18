import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartItemService } from '../services/cart-item.service';
import { UpdateCartItemDto } from '../dtos/update-cart-item.dto';
import { CartItemBaseDto } from '../dtos/cart-item-base.dto';
import { CreateCartItemDto } from '../dtos/create-cart-item.dto';

@Controller('cart-item')
export class CartItemController {
  constructor(private readonly service: CartItemService) {}

  // @Get()
  // async getCartItems(): Promise<any> {
  //   return this.service.getCartItems();
  // }

  @Post()
  async createCartItem(@Body() shoppingCart: CreateCartItemDto): Promise<CartItemBaseDto> {
    return this.service.createCartItem(shoppingCart);
  }

  @Put(':id')
  async updateCartItemById(
    @Param('id') id: string,
    @Body() cartItem: UpdateCartItemDto,
  ): Promise<CartItemBaseDto> {
    return this.service.updateCartItemById(id, cartItem);
  }

  // @Get(':id')
  // async getCartItemById(@Param('id') id: string): Promise<any> {
  //   return this.service.getCartItemById(id);
  // }

  @Delete(':id')
  async deleteCartItemById(@Param('id') id: string): Promise<CartItemBaseDto> {
    return this.service.deleteCartItemById(id);
  }
}
