import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFightDto {
  @IsNotEmpty()
  @IsNumber()
  event: number;

  @IsNotEmpty()
  @IsNumber()
  fighterA: number;

  @IsNotEmpty()
  @IsNumber()
  fighterB: number;

  @IsNotEmpty()
  @IsString()
  resultado: string;
}
