import { IsArray, IsBoolean, IsNumber, IsString, isArray } from "class-validator";


export class CreatePostDto {

    @IsString()
    title: string;

    @IsString()
    details: string;

    @IsArray()
    type_publication: string[];
    
    @IsBoolean()
    is_found: boolean;
   
    @IsNumber()
    likes: number;

    @IsString()
    pet_id:string

    @IsString()
    user_id:string

    /*
    @IsArray()
    images:string[]
    */
}
