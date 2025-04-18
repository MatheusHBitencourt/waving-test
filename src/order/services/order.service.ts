import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../repositories/order.repository';
import { OrderStatus } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private readonly repository: OrderRepository) {}

  async createOrder(order: any): Promise<any> {
    return this.repository.createOrder(order);
  }

  async updateOrderStatus(id: string, status: OrderStatus): Promise<any> {
    return this.repository.updateOrderStatus(id, status);
  }

  async getOrders(): Promise<any> {
    return this.repository.getOrders();
  }

  async getOrdersByUserId(userId: string): Promise<any> {
    return this.repository.getOrdersByUserId(userId);
  }
}
