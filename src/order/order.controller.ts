import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '@prisma/client';
import { OrderDto } from './dtos/order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async createOrder(@Body() order: OrderDto): Promise<Order> {
      return this.orderService.createOrder(order)
  }
}
