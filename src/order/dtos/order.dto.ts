import { IsString, IsEmail, IsBoolean, IsNotEmpty, IsEmpty } from "class-validator";

export class OrderDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  document: string;

  @IsString()
  nickname: string;

  @IsString()
  @IsNotEmpty()
  requester: string;

  @IsString()
  address: string;

  @IsString()
  phone: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  budget: boolean;

  @IsString()
  model: string;

  @IsString()
  brand: string;

  @IsString()
  @IsNotEmpty()
  plate: string;

  @IsString()
  fleet: string;

  @IsString()
  chassis: string;

  @IsString()
  renavam: string;

  @IsString()
  @IsNotEmpty()
  km: string;

  @IsString()
  color: string;

  @IsString()
  age: string;

  @IsString()
  observation: string;

  @IsString()
  @IsNotEmpty()
  reported: string;

  @IsString()
  problem_verified: string;

  @IsString()
  services_performed: string;

  @IsString()
  nf_service: string;

  @IsString()
  nf_parts: string;

  @IsString()
  invoices: string;

  @IsString()
  description_general: string;

  @IsString()
  obs_wheel: string;

  @IsString()
  obs_accessories: string;

  @IsString()
  obs_structure: string;

  @IsString()
  add_observation: string;

  @IsString()
  extra_observation: string;

  @IsString()
  total_price: string;

  @IsString()
  discount: string;

  @IsString()
  payment_method: string;

  @IsString()
  total_payable: string;

  @IsString()
  status: string;
}