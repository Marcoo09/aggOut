import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class NeighborhoodEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lat: string;

  @Column()
  lon: string;
}
