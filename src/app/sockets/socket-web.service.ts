import { Injectable } from '@angular/core';
import io,{Socket} from 'socket.io-client'
import { environment } from 'src/environments/environment.prod';



const url=  environment.urlBase;

@Injectable({
  providedIn: 'root'
})
export class SocketWebService {

  socket?: Socket
  public StatusSocket: boolean = false;


  constructor() { }


  connect(){

    const Token = localStorage.getItem('token')

    this.socket= io(url, {

      transports: ["websocket"],
      forceNew: true,
      query:{

        'accessToken': `Bearer ${Token}`

      }

    })
  }


  status(){

    console.log(this.socket!.connect())

  }


  disconnect() {
    this.socket!.disconnect();
  }

  validar(){

    this.socket?.emit("validar",)

  }

}
