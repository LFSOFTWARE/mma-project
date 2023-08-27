import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Statistics } from './statistics.entity'; // Importe a entidade Statistics aqui, se estiver definida

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  weight_class: string;

  @Column()
  nationality: string;

  @Column()
  team: string;

  @OneToMany(() => Statistics, (statistics) => statistics.fighter)
  statistics: Statistics[];
}
