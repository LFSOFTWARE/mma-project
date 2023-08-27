import { Module } from '@nestjs/common';
import { RankingService } from './ranking.service';
import { RankingController } from './ranking.controller';
import { Ranking } from 'src/models/ranking.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from 'src/models/fighter.entity';

@Module({
  controllers: [RankingController],
  providers: [RankingService],
  imports: [TypeOrmModule.forFeature([Fighter, Ranking])],
})
export class RankingModule {}
