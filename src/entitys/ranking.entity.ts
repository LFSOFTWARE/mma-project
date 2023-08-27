import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Fighter } from './fighter.entity'; // Importe a entidade Fighter aqui

@Entity()
export class Ranking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  weight_class: string;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighter_id' })
  fighter: Fighter;

  @Column()
  posicao: number;
}
