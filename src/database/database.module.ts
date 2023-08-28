import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/entitys/event.entity';
import { Fight } from 'src/entitys/fight.entity';
import { Fighter } from 'src/entitys/fighter.entity';
import { Ranking } from 'src/entitys/ranking.entity';
import { Statistics } from 'src/entitys/statistics.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],

      useFactory: async () => ({
        type: 'postgres',
        host: process.env.PG_HOST,
        port: +process.env.PG_PORT,
        username: process.env.PG_USERNAME,
        password: process.env.PG_PASSWORD,
        database: process.env.PG_DATABASE,
        entities: [Fighter, Statistics, Event, Fight, Ranking],
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}
