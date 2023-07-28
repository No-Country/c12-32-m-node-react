import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { UserEntity } from '../auth/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface ConnectedClients{
    [id:string]:{
        socket:Socket
        user:UserEntity
    }
}

@Injectable()
export class CommentWsService {

private connectedClients:ConnectedClients={}
constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
){}

async registerClient(client:Socket,user_id:string){
const user=await this.userRepository.findOne({where:{id:user_id}})
if(!user) throw new Error("user not found")
this.checkUserConnection(user)
this.connectedClients[client.id]={
    socket:client,
    user
}
}

getConnectClients():number{
return Object.keys(this.connectedClients).length
}

removeClient(clientId:string){
   delete this.connectedClients[clientId]
}

getUserId( socketId: string ) {
    return this.connectedClients[socketId].user.id;
}

private checkUserConnection(user:UserEntity){
for (const clientId of Object.keys(this.connectedClients)){
    
    const connectedClient=this.connectedClients[clientId]
    if(connectedClient.user.id===user.id){
        connectedClient.socket.disconnect();
        break
    }
}
}

}
