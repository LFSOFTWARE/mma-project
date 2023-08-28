import { Module } from '@nestjs/common';
import { FightService } from './fight.service';
import { FightController } from './fight.controller';
import { Fight } from 'src/entitys/fight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from 'src/entitys/fighter.entity';
import { Event } from 'src/entitys/event.entity';

@Module({
  controllers: [FightController],
  providers: [FightService],
  imports: [TypeOrmModule.forFeature([Fight, Fighter, Event])],
})
export class FightModule {}
