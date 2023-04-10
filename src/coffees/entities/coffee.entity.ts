import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Index(['name', 'brand'])
@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  recommendations: number;

  @Column()
  brand: string;

  @JoinTable()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, // 👈 or optionally just insert or update ['insert']
  })
  flavors: Flavor[];
}
