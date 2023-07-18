import {IsString} from "class-validator";


export class CreateCommentDto {

    @IsString()
    comments:string

}
