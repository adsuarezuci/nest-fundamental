import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(): string {
    return 'Probando getAll coffees';
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `Se busco el dato por el id ${params.id}`;
  }
}
