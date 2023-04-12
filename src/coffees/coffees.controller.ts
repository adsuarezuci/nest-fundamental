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
import { ApiForbiddenResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesAll: CoffeesService) {}

  @Public()
  @Get()
  async findAll(@Query() pagination: PaginationQueryDto): Promise<Coffee[]> {
    // const { limit, offset } = pagination;
    // await new Promise((resolve) => setTimeout(resolve, 5000)); // to see timeout error response
    return this.coffeesAll.findAll(pagination);
  }

  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get(':id')
  findOne(@Param() params): Promise<Coffee> {
    return this.coffeesAll.findOne(params.id);
  }

  @ApiResponse({ status: 403, description: 'Forbidden' }) // Same way that @ApiForbiddenResponse
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
