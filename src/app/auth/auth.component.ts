import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})



export class AuthComponent implements OnInit{

  ngOnInit(): void {}

  constructor(
    private router: Router,
    private authService: AuthService
    ){}

  noControl: string="";
  password : string="";


  login(){

    this.authService.login(this.noControl, this.password).subscribe(
      resp=>{

        if(resp.status){

          localStorage.setItem('token', resp.accessToken!);

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Bienvenido ${resp.user?.name}`,
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigateByUrl('/Dashboard');

        }

      

      }, error =>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Credenciales Incorrectas',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )

  }  


  
  
}
