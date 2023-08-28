import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStatisticDto {
  @IsNotEmpty()
  @ApiProperty()
  fighter: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  wins: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  losses: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  knockouts: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  submissions: number;
}
