import {Controller, Get, Post, Body} from '@nestjs/common';
import {NeighborhoodService} from './neighborhood.service';
import {NeighborhoodEntity} from './neighborhood.entity';

@Controller()
export class NeighborhoodController {
  constructor(private readonly neighborhoodService: NeighborhoodService) {}

  @Get('neighbordhood')
  index(): Promise<NeighborhoodEntity[]> {
    return this.neighborhoodService.findAll();
  }

  @Post('neighbordhood/create')
  async register(@Body() neighborhood: NeighborhoodEntity): Promise<any> {
    return this.neighborhoodService.create(neighborhood);
  }
}
