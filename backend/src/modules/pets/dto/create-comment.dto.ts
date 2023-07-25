import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateCommentsDto{

    @IsString()
    @ApiProperty({ description: 'comment' })
    comment: string;
  
}