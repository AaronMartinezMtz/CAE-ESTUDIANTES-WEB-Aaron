import { Component } from '@angular/core';
import { datos } from './datos.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  Datos:object[]=[];

  datosUser(){
    let datosusuario = new datos(this.inputNoControl, this.inputPassword);
   this.Datos.push(datosusuario);
   console.log(this.Datos);
  }
  inputNoControl:string="";
  inputPassword:string="";
}
