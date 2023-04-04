import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesAll: CoffeesService) {}

  @Get()
  findAll(@Query() pagination): Coffee[] {
    // const { limit, offset } = pagination;
    return this.coffeesAll.findAll();
  }

  @Get(':id')
  findOne(@Param() params): Coffee {
    return this.coffeesAll.findOne(params.id);
  }

  @Post()
  create(@Body() createCoffeeDTO: CreateCoffeeDto) {
    this.coffeesAll.create(createCoffeeDTO);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDTO: UpdateCoffeeDto) {
    this.coffeesAll.update(id, updateCoffeeDTO);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.coffeesAll.remove(id);
  }
}
