import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrderRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createOrder(data: any): Promise<any> {
    const order = await this.prisma.order.create({ data });

    return order;
  }

  async updateOrderStatus(id: string, status: OrderStatus): Promise<any> {
    return this.prisma.order.update({ where: { id }, data: { status } });
  }

  async getOrders(): Promise<any> {
    return this.prisma.order.findMany({ include: { user: true } });
  }

  async getOrdersByUserId(userId: string): Promise<any> {
    return this.prisma.order.findMany({ where: { userId } });
  }
}
