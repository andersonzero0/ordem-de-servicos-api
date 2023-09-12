import { OrderDto } from "./order.dto";

export class ReturnOrderDto {
  id: string;
  name: string;
  model: string;
  brand: string;
  place: string;
  status: string;

  constructor(order: OrderDto) {
    this.id = order.id;
    this.name = order.name;
    this.model = order.model;
    this.brand = order.brand;
    this.place = order.plate;
    this.status = order.status;
  }
}