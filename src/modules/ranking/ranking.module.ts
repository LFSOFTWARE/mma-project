import { Module } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { RankingController } from './ranking.controller';
import { Ranking } from 'src/entitys/ranking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from 'src/entitys/fighter.entity';

@Module({
  controllers: [RankingController],
  providers: [RankingService],
  imports: [TypeOrmModule.forFeature([Fighter, Ranking])],
})
export class RankingModule {}
