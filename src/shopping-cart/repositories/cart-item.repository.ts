import { Injectable } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { PrismaService } from '../../prisma/prisma.service';
import { CartItemBaseDto } from '../dtos/cart-item-base.dto';
import { CreateCartItemDto } from '../dtos/create-cart-item.dto';
import { UpdateCartItemDto } from '../dtos/update-cart-item.dto';

@Injectable()
export class CartItemRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createCartItem(data: CreateCartItemDto): Promise<CartItemBaseDto> {
    const cartItem = await this.prisma.cartItem.create({ data: { ...data } });

    return plainToInstance(CartItemBaseDto, cartItem);
  }

  //   async getCartItems(): Promise<CartIteBaseDto[]> {
  //     const cartItem = await this.prisma.cartItem.findMany();
  //
  //     return plainToInstance(CartIteBaseDto, cartItem);
  //   }

  //   async getCartItemByProductId(productId: string): Promise<CartIteBaseDto[]> {
  //     const cartItem = await this.prisma.cartItem.findMany({
  //       where: { productId },
  //     });
  //
  //     return plainToInstance(CartIteBaseDto, cartItem);
  //   }

  async updateCartItemById(
    id: string,
    data: UpdateCartItemDto,
  ): Promise<CartItemBaseDto> {
    const cartItem = await this.prisma.cartItem.update({
      where: { id },
      data: { ...data, totalPrice: data.unitPrice * data.quantity },
    });

    return plainToInstance(CartItemBaseDto, cartItem);
  }

  async deleteCartItemById(id: string): Promise<CartItemBaseDto> {
    const cartItem = await this.prisma.cartItem.delete({
      where: { id },
    });

    return plainToInstance(CartItemBaseDto, cartItem);
  }
}
