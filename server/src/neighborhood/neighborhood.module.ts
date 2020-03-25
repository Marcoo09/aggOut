import {Module} from '@nestjs/common';
import {NeighborhoodService} from './neighborhood.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NeighborhoodEntity} from './neighborhood.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NeighborhoodEntity])],
  providers: [NeighborhoodService],
  exports: [NeighborhoodService],
})
export class NeighborhoodModule {}
