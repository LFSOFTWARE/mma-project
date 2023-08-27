import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Fight } from './fight.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  data: Date;

  // Relacionamento um-para-muitos com a entidade Fight (se estiver definida)
  @OneToMany(() => Fight, (fight) => fight.event)
  fights: Fight[];
}
