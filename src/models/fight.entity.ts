import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Event } from './event.entity'; // Importe a entidade Event aqui
import { Fighter } from './fighter.entity'; // Importe a entidade Fighter aqui

@Entity()
export class Fight {
  @PrimaryGeneratedColumn()
  fight_id: number;

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighter1_id' })
  fighter1: Fighter;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighter2_id' })
  fighter2: Fighter;

  @Column()
  resultado: string;
}
