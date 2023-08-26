import { PartialType } from '@nestjs/mapped-types';
import { CreateFighterDto } from './create-fighter.dto';
import { IsString } from 'class-validator';

export class UpdateFighterDto extends PartialType(CreateFighterDto) {
  @IsString()
  name?: string;

  @IsString()
  weight_class?: string;

  @IsString()
  nationality?: string;

  @IsString()
  team?: string;
}
