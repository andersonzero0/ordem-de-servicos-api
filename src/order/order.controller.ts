import { Body, Controller, Post, Get, UsePipes, ValidationPipe, Param } from '@nestjs/common';
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

    const years = []

    const yearsR = await this.orderService.getYears()

    yearsR.map((year: any) => {

      years.push(Number(year.year))
      
    })

    return years
    
  }

  @Get('year/:year')
  async getOrdersByYear(@Param('year') year: number): Promise<ReturnOrderDto[]> {

    const yearReturn = Number(year)
    
    return (await this.orderService.getOrdersByYear(yearReturn)).map(
      (order) => new ReturnOrderDto(order)
    )
  }
}