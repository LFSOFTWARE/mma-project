import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { FighterModule } from './fighter/fighter.module';
import { EventModule } from './event/event.module';
import { FightModule } from './fight/fight.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    DatabaseModule,
    FighterModule,
    EventModule,
    FightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
