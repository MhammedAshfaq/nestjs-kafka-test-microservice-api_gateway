import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './create-order-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createOrder(
    @Body() createOrderRequest: CreateOrderRequest,
  ): Promise<any> {
    return await this.appService.createOrder(createOrderRequest);
  }
}
