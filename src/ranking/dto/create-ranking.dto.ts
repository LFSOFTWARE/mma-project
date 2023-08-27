import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRankingDto {
  @IsString()
  @IsNotEmpty()
  weight_class: string;

  @IsNumber()
  @IsNotEmpty()
  fighter: number;

  @IsNumber()
  @IsNotEmpty()
  posicao: number;
}
