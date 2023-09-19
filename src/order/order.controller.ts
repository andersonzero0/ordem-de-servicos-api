import { Body, Controller, Post, Get, UsePipes, ValidationPipe, Param, Put } from '@nestjs/common';
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

  @Get('years')
  async getYears() {

    return this.orderService.getOrdersByYear()
    
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {

    return this.orderService.getOrderById(id);
    
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() data: OrderDto) {

    return this.orderService.updateOrder(id, data)
    
  }
}