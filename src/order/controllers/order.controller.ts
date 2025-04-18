import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { OrderService } from '../services/order.service';
import { OrderStatus } from '@prisma/client';

@Controller('order')
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post()
  async createOrder(@Body() order: any): Promise<any> {
    return this.service.createOrder(order);
  }

  @Put(':id')
  async updateOrderStatus(
    @Param('id') id: string,
    @Query('status') status: OrderStatus,
  ): Promise<any> {
    return this.service.updateOrderStatus(id, status);
  }

  @Get()
  async getOrders(): Promise<any> {
    return this.service.getOrders();
  }

  @Get(':userId')
  async getOrdersByUserId(@Param('userId') userId: string): Promise<any> {
    return this.service.getOrdersByUserId(userId);
  }
}
