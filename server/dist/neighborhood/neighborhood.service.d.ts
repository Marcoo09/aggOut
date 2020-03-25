import { NeighborhoodEntity } from './neighborhood.entity';
import { Repository } from 'typeorm';
export declare class NeighborhoodService {
    private neighborhoodRepository;
    constructor(neighborhoodRepository: Repository<NeighborhoodEntity>);
    findAll(): Promise<NeighborhoodEntity[]>;
    create(user: NeighborhoodEntity): Promise<NeighborhoodEntity>;
}
