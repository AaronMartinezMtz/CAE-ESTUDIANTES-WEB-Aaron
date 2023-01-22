import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Login } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = `${environment.urlBase}/api/auth/login`

  login(noControl : string,  password: string){

    const body = {No_control:noControl,password}

    console.log(body);
    

    return this.http.post<Login>(this.url,body)

  }


  validarToken (): Observable<boolean> {

    const url= `${environment.urlBase}/api/auth/renew`;
    const token =  localStorage.getItem('token') || ''


    const headers= new HttpHeaders().set
    ('Authorization', (` Bearer ${token}`) )

    return this.http.get<Login> (url,{headers})
    .pipe(
      map(resp=>{

        return resp.status;

      }),
      catchError(err => of(false))
    )
    ;
  }

}
