import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { SocketWebService } from '../sockets/socket-web.service';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate {

  constructor( private auth: AuthService, private router: Router, private socketWeb: SocketWebService ){


  }

  canActivate(): Observable <boolean> | boolean  {
    
    return this.auth.validarToken()
    .pipe(
      tap(valid =>{

        if(!valid){
          this.router.navigateByUrl('/login');
          this.socketWeb.disconnect();
        }else{
          this.socketWeb.connect()
        }

      })
    )
  }
  
}
