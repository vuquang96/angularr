import { Component, ViewChild } from '@angular/core';
import { Training } from './training/training/training.component';
import { InfoComponent } from './training/form/info/info.component';
import { LoginService } from './services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  agree = 0;
  disgree = 0;
  @ViewChild('Training') Training:Training; // chưa làm

  constructor(private loginService: LoginService, private router: Router){

  }
  parentVote(agree){
    if(agree) this.agree++;
    else this.disgree++;
  }
  logout(){
    alert("Logout success!")
    this.loginService.setLogin(false);
    this.router.navigate(['/']);
  }
}
