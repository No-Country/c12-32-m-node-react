import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

interface ConnectedClients{
    [id:string]:Socket
}

@Injectable()
export class CommentWsService {

    private connectedClients:ConnectedClients={}

registerClient(client:Socket){
this.connectedClients[client.id]=client
}

getConnectClients():number{
return Object.keys(this.connectedClients).length
}

removeClient(clientId:string){
   delete this.connectedClients[clientId]
}

}
