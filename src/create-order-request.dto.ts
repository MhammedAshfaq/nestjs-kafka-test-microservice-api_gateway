/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrderRequest {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @Type(() => Number) // Ensures price is correctly transformed into a number
  @IsNumber({}, { message: 'Price must be a number' })
  price: number;
}
