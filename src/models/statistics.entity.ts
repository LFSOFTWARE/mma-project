import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Fighter } from './fighter.entity'; // Importe a entidade Fighter aqui

@Entity()
export class Statistics {
  @PrimaryGeneratedColumn()
  statistics_id: number;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighter_id' })
  fighter: Fighter;

  @Column()
  wins: number;

  @Column()
  losses: number;

  @Column()
  knockouts: number;

  @Column()
  submissions: number;
}
