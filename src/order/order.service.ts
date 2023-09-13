import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { OrderDto } from './dtos/order.dto';
import { Order } from '@prisma/client';

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

  async getOrdersByYear(year: number): Promise<OrderDto[]> {

    return this.prisma.order.findMany({
      where: {
        create_at: {
          gte: `${year}-01-01T00:00:00.000Z`,
          lt: `${year + 1}-01-01T00:00:00.000Z`
        }
      }
    })
  }

  async getYears() {

    return this.prisma.$queryRaw`
      SELECT DISTINCT YEAR(create_at) as year
      FROM \`Order\`;
    `;
  }
}
