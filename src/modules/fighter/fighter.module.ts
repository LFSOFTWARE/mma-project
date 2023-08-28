import { Module } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterController } from './fighter.controller';
import { Fighter } from 'src/entitys/fighter.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Fighter])],
  controllers: [FighterController],
  providers: [FighterService],
})
export class FighterModule {}
