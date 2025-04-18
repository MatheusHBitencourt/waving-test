import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../../prisma/prisma.service';
import { ShoppingCartBaseDto } from '../dtos/shopping-cart.base.dto';

@Injectable()
export class ShoppingCartRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getShoppingCartByUser(userId: string): Promise<ShoppingCartBaseDto> {
    const shoppingCart = await this.prisma.shoppingCart.findUnique({
      where: { userId },
      include: { cartItem: { include: { product: true } } },
    });

    return plainToInstance(ShoppingCartBaseDto, shoppingCart);
  }
}
