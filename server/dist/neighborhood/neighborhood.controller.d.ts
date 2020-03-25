import { NeighborhoodService } from './neighborhood.service';
import { NeighborhoodEntity } from './neighborhood.entity';
export declare class NeighborhoodController {
    private readonly neighborhoodService;
    constructor(neighborhoodService: NeighborhoodService);
    index(): Promise<NeighborhoodEntity[]>;
    register(neighborhood: NeighborhoodEntity): Promise<any>;
}
