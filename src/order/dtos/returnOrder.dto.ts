import { OrderDto } from "./order.dto";

export class ReturnOrderDto {
  id: string;
  name: string;
  model: string;
  brand: string;
  plate: string;
  status: string;
  total_payable: string;
  create_at: Date


  constructor(order: OrderDto) {
    this.id = order.id;
    this.name = order.name;
    this.model = order.model;
    this.brand = order.brand;
    this.plate = order.plate;
    this.status = order.status;
    this.total_payable = order.total_payable;
    this.create_at = order.create_at
  }
}