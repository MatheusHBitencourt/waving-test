import { Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ShoppingCartBaseDto } from '../dtos/shopping-cart.base.dto';
import { ShoppingCartService } from '../services/shopping-cart.service';

@Controller('shopping-cart')
export class ShoppingCartController {
  constructor(private readonly service: ShoppingCartService) {}

  @Get('user/:id')
  async getShoppingCartByUser(
    @Param('id') userId: string,
  ): Promise<ShoppingCartBaseDto> {
    return this.service.getShoppingCartByUser(userId);
  }
}
