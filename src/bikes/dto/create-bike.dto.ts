import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBikeDto {
  @ApiProperty({ example: 'Honda' })
  @IsNotEmpty()
  @IsString()
  make: string;

  @ApiProperty({ example: 'CBR 650R' })
  @IsNotEmpty()
  @IsString()
  model: string;

  @ApiProperty({ example: 2023 })
  @IsNotEmpty()
  @IsInt()
  year: number;

  @ApiProperty({ example: 'Sports' })
  @IsNotEmpty()
  @IsString()
  type: string;
}
