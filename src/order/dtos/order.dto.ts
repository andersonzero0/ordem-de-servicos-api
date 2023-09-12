import { IsString, IsEmail, IsBoolean, IsNotEmpty, IsEmpty, IsOptional } from "class-validator";

export class OrderDto {
  @IsEmpty()
  @IsOptional()
  id: string
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsOptional()
  document: string;

  @IsString()
  @IsOptional()
  nickname: string;

  @IsString()
  @IsNotEmpty()
  requester: string;

  @IsString()
  @IsOptional()
  address: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsEmail()
  @IsOptional()
  email: string;

  @IsBoolean()
  @IsOptional()
  budget: boolean;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  brand: string;

  @IsString()
  @IsNotEmpty()
  plate: string;

  @IsString()
  @IsOptional()
  fleet: string;

  @IsString()
  @IsOptional()
  chassis: string;

  @IsString()
  @IsOptional()
  renavam: string;

  @IsString()
  @IsNotEmpty()
  km: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  age: string;

  @IsString()
  @IsOptional()
  observation: string;

  @IsString()
  @IsNotEmpty()
  reported: string;

  @IsString()
  @IsOptional()
  problem_verified: string;

  @IsString()
  @IsOptional()
  services_performed: string;

  @IsString()
  @IsOptional()
  nf_service: string;

  @IsString()
  @IsOptional()
  nf_parts: string;

  @IsString()
  @IsOptional()
  invoices: string;

  @IsString()
  @IsOptional()
  description_general: string;

  @IsString()
  @IsOptional()
  obs_wheel: string;

  @IsString()
  @IsOptional()
  obs_accessories: string;

  @IsString()
  @IsOptional()
  obs_structure: string;

  @IsString()
  @IsOptional()
  add_observation: string;

  @IsString()
  @IsOptional()
  extra_observation: string;

  @IsString()
  @IsOptional()
  total_price: string;

  @IsString()
  @IsOptional()
  discount: string;

  @IsString()
  @IsOptional()
  payment_method: string;

  @IsString()
  @IsOptional()
  total_payable: string;

  @IsString()
  @IsOptional()
  status: string;
}