import { OnGatewayConnection, OnGatewayDisconnect, SubscribeMessage, WebSocketGateway,WebSocketServer } from '@nestjs/websockets';
import { CommentWsService } from './comment-ws.service';
import { Socket,Server} from 'socket.io';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth/interfaces/jwt_payload';
import { PetsService } from '../pets/services/pets.service';

@WebSocketGateway({cors:true})
export class CommentWsGateway implements OnGatewayConnection, OnGatewayDisconnect {

constructor(
  private readonly JwtServices:JwtService,
  private readonly commentWsService: CommentWsService,
  private readonly petsServices:PetsService,
  ) {}

@WebSocketServer() wss:Server;

async handleConnection(client: Socket) {
  try {
    const token=client.handshake.headers.authentication as string
    console.log("Client conectado")
  const payload=this.JwtServices.decode(token) as JwtPayload
  if(!payload){
    this.wss.emit("check_jwt",{
      message:"error"
    })
    return
  }
  
  this.commentWsService.registerClient(client,payload.id)
  this.wss.emit("clients-updated",this.commentWsService.getConnectClients())
  } catch (error) {
    return client.disconnect()
  }
  
  
}
handleDisconnect(client: Socket) {
  //console.log("Client desconectado",client.id)
  this.commentWsService.removeClient(client.id)
  this.wss.emit("clients-updated",this.commentWsService.getConnectClients())
}

//recibe lo que se envie en el evento


@SubscribeMessage("comment_publication")
async handlermessageFromCLient(client:Socket,payload_comment:messageInterface){
 const user_id=this.commentWsService.getUserId(client.id)
 await this.petsServices.createComment(payload_comment.pet_id,user_id,payload_comment.comment)
 const Publication=await this.petsServices.findOne({where:{id:payload_comment.pet_id}})
 this.wss.emit("comment-complete",
   Publication
  )
  /*
console.log(client.id,payload_comment)
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
*/
}

}
