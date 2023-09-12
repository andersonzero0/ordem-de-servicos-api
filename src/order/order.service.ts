import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dtos/order.dto';
import { Order } from '@prisma/client';
import { ReturnOrderDto } from './dtos/returnOrder.dto';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(order: OrderDto): Promise<Order> {
    return this.prisma.order.create({
      data: order,
    });
  }

  async getOrders(): Promise<OrderDto[]> {
    //name, model, brand, place, id, status

    return this.prisma.order.findMany();
  }
}
