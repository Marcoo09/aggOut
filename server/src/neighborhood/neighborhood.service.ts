import {Injectable} from '@nestjs/common';
import {NeighborhoodEntity} from './neighborhood.entity';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class NeighborhoodService {
  constructor(
    @InjectRepository(NeighborhoodEntity)
    private neighborhoodRepository: Repository<NeighborhoodEntity>,
  ) {}

  async findAll(): Promise<NeighborhoodEntity[]> {
    return await this.neighborhoodRepository.find();
  }

  async create(user: NeighborhoodEntity): Promise<NeighborhoodEntity> {
    return await this.neighborhoodRepository.save(user);
  }
}
