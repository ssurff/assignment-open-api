import { Controller, Get } from '@nestjs/common';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeService) {}

  @Get('hot')
  async getHotCoffee() {
    return this.coffeeService.getHotCoffee();
  }

  @Get('iced')
  async getIcedCoffee() {
    return this.coffeeService.getIcedCoffee();
  }
}
