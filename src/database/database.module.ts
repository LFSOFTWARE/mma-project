import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/models/event.entity';
import { Fight } from 'src/models/fight.entity';
import { Fighter } from 'src/models/fighter.entity';
import { Ranking } from 'src/models/ranking.entity';
import { Statistics } from 'src/models/statistics.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'mma',
        entities: [Fighter, Statistics, Event, Fight, Ranking],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
