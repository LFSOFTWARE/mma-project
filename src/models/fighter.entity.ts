import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Statistics } from './statistics.entity'; // Importe a entidade Statistics aqui, se estiver definida

@Entity()
export class Fighter {
  @PrimaryGeneratedColumn()
  fighter_id: number;

  @Column()
  nome: string;

  @Column()
  weight_class: string;

  @Column()
  nacionalidade: string;

  @Column()
  equipe: string;

  // Relacionamento um-para-muitos com a entidade Statistics (se estiver definida)
  @OneToMany(() => Statistics, (statistics) => statistics.fighter)
  statistics: Statistics[];
}
