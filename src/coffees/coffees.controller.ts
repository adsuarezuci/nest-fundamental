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
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesAll: CoffeesService) {}

  @Get()
  findAll(@Query() pagination: PaginationQueryDto): Promise<Coffee[]> {
    // const { limit, offset } = pagination;
    return this.coffeesAll.findAll(pagination);
  }

  @Get(':id')
  findOne(@Param() params): Promise<Coffee> {
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
