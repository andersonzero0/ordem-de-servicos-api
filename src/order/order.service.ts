import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dtos/order.dto';
import { Order } from '@prisma/client';

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async createOrder(order: OrderDto): Promise<Order> {
    return this.prisma.order.create({
      data: order
    })
  }
}
