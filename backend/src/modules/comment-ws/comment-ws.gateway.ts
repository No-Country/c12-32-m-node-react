import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway,WebSocketServer } from '@nestjs/websockets';
import { CommentWsService } from './comment-ws.service';
import { Socket,Server} from 'socket.io';

@WebSocketGateway({cors:true})
export class CommentWsGateway implements OnGatewayConnection, OnGatewayDisconnect {

constructor(private readonly commentWsService: CommentWsService) {}

@WebSocketServer() wss:Server;

handleConnection(client: Socket) {
  //console.log("Client conectado",client.id)
  this.commentWsService.registerClient(client)
  this.wss.emit("clients-updated",this.commentWsService.getConnectClients())
}
handleDisconnect(client: Socket) {
  //console.log("Client desconectado",client.id)
  this.commentWsService.removeClient(client.id)
  this.wss.emit("clients-updated",this.commentWsService.getConnectClients())
}

//recibe lo que se envie en el evento
//@SubscribeMessage("nombre-evento")
handlermessageFromCLient(client:Socket,payload:any){
  //emite a el cliente solamente
  client.emit("name-evemt",{
    //objeto a enviar
  })
console.log(client.id,payload)
//emite a todos los clientes menos el inicial
client.broadcast.emit("name-evemt",{
  //objeto a enviar
})
//emitio a todos los clientes a todos
this.wss.emit("name-event",{
  //obejtp0 a enviar
})

//ect ect
//client.join("venta") unirse
//this.wss.to(clientId:string) lo unes a otro lado
}

}
