import { Module } from '@nestjs/common';
import { StatisticsService } from './statistics.service';
import { StatisticsController } from './statistics.controller';
import { Fighter } from 'src/entitys/fighter.entity';
import { Statistics } from 'src/entitys/statistics.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
  imports: [TypeOrmModule.forFeature([Fighter, Statistics])],
})
export class StatisticsModule {}
