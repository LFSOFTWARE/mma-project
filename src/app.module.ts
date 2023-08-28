import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { FighterModule } from './modules/fighter/fighter.module';
import { EventModule } from './modules/event/event.module';
import { FightModule } from './modules/fight/fight.module';
import { RankingModule } from './modules/ranking/ranking.module';
import { StatisticsModule } from './modules/statistics/statistics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    FighterModule,
    EventModule,
    FightModule,
    RankingModule,
    StatisticsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
