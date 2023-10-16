import { Body, Controller, Post, Get, UsePipes, ValidationPipe, Param, Put, Delete, Query } from '@nestjs/common';
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
  async getOrderAll(@Query('page') page: number): Promise<any> {
     //const orders = (await this.orderService.getOrders(page)).map(
     //  (order) => new ReturnOrderDto(order)
     //)

    const response = await this.orderService.getOrders(page)
    //return response[1]


    const orders = response[1].map(
      (order: any) => new ReturnOrderDto(order)
    )

    return {
      orders: orders,
      count: response[0]
    }
  }

  @Get('years')
  async getYears() {

    return this.orderService.getOrdersByYear()
    
  }

  @Get('many')
  async findOrdersMany(): Promise<ReturnOrderDto[]> {

    return (await this.orderService.findOrdersMany()).map(
      (order) => new ReturnOrderDto(order)
    )
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {

    return this.orderService.getOrderById(id);
    
  }

  @Put(':id')
  async updateOrder(@Param('id') id: string, @Body() data: OrderDto) {

    return this.orderService.updateOrder(id, data)
    
  }

  @Delete(':id')
  async deleteOrder(@Param('id') id: string) {

    return this.orderService.deleteOrder(id)
    
  }
}