import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStatisticDto {
  @IsNotEmpty()
  fighter: any;

  @IsNotEmpty()
  @IsNumber()
  wins: number;

  @IsNotEmpty()
  @IsNumber()
  losses: number;

  @IsNotEmpty()
  @IsNumber()
  knockouts: number;

  @IsNotEmpty()
  @IsNumber()
  submissions: number;
}
