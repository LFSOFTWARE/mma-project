import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFighterDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  weight_class: string;

  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  team: string;
}
