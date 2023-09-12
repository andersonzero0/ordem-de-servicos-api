import { Body, Controller, Post, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';
import { OrderDto } from './dtos/order.dto';
import { ReturnOrderDto } from './dtos/returnOrder.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createOrder(@Body() order: OrderDto): Promise<Order> {
      return this.orderService.createOrder(order)
  }

  @Get()
  async getOrderAll(): Promise<ReturnOrderDto[]> {
    return (await this.orderService.getOrders()).map(
      (order) => new ReturnOrderDto(order)
    )
  }
}
