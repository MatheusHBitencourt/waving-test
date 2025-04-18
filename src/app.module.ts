import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    PrismaModule,
    ProductModule,
    ShoppingCartModule,
    UserModule,
    OrderModule,
    AuthModule,
  ],
})
export class AppModule {}
