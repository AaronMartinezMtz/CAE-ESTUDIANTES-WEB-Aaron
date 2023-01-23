import { Injectable } from '@angular/core';
import io,{Socket} from 'socket.io-client'
import { environment } from 'src/environments/environment.prod';
import Swal from 'sweetalert2';



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

  validar(payload:any){

    this.socket?.emit("validar",payload);

  }

  escucharRespuesta(){

    this.socket?.on('resp', resp=>{

      if(resp.status){

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${resp.massage}`,
          showConfirmButton: false,
          timer: 1500
        })
        

      }

      else{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: `Error`,
          showConfirmButton: false,
          timer: 1500
        })
        
      }
      

    })

  }

}
