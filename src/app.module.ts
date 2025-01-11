import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeService } from './coffee/coffee.service';
import { CoffeeController } from './coffee/coffee.controller';

@Module({
  imports: [],
  controllers: [AppController, CoffeeController],
  providers: [AppService, CoffeeService],
})
export class AppModule {}
