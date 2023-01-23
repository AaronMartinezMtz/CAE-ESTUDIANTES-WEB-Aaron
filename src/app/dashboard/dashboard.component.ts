import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { SocketWebService } from '../sockets/socket-web.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {

  constructor(private socketWebService: SocketWebService, private router : Router){}

  ngOnInit() {

  }
  
  qrResultString!: string;

  onCodeResult(resultString: string) {
    this.qrResultString = resultString;

    console.log(this.qrResultString);

    const payload = 
    {

      from: localStorage.getItem('id'),
      checador: this.qrResultString.slice(3,27),
      value:  this.qrResultString.slice(28,36),

    }

    console.log(payload);
    

    this.socketWebService.validar(payload)
    this.socketWebService.escucharRespuesta()

    this.router.navigateByUrl("/Dashboard/home")
  

  }
}
