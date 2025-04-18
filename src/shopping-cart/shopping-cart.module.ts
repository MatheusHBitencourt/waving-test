import { Module } from '@nestjs/common';
import { ShoppingCartRepository } from './repositories/shopping-cart.repository';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ShoppingCartController } from './controllers/shopping-cart.controller';
import { CartItemRepository } from './repositories/cart-item.repository';
import { CartItemService } from './services/cart-item.service';
import { CartItemController } from './controllers/cart-item.controller';

@Module({
  imports: [],
  controllers: [ShoppingCartController, CartItemController],
  providers: [
    ShoppingCartRepository,
    ShoppingCartService,
    CartItemRepository,
    CartItemService,
  ],
  exports: [],
})
export class ShoppingCartModule {}
