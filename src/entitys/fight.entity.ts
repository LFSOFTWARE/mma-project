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
  id: number;

  @ManyToOne(() => Event)
  @JoinColumn({ name: 'event_id' })
  event: Event;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighterA_id' })
  fighterA: Fighter;

  @ManyToOne(() => Fighter)
  @JoinColumn({ name: 'fighterB_id' })
  fighterB: Fighter;

  @Column()
  resultado: string;
}
