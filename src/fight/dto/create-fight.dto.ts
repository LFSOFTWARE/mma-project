import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateFightDto {
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  event: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  fighterA: number;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  fighterB: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  resultado: string;
}
