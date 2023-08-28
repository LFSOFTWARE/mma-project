import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFighterDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  weight_class: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nationality: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  team: string;
}
