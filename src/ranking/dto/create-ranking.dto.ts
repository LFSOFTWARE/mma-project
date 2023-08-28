import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRankingDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  weight_class: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  fighter: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  posicao: number;
}
