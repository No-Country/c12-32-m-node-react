import { IsNumber, IsString } from "class-validator";

export class CreatePetsDto {
   
    @IsString()
    name: string;

    @IsString()
    description: string;
     
    @IsNumber()
    size: number;

    @IsNumber()
    age: number;

    @IsString()
    gender: string;
  
    @IsString()
    lastSeen: string;
  
    @IsString()
    race: string;

    @IsString()
    user_id:string
}
