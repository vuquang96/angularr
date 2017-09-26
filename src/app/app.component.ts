import { Component, ViewChild } from '@angular/core';
import { Training } from './training/training/training.component';
import { InfoComponent } from './training/form/info/info.component';

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

  parentVote(agree){
    if(agree) this.agree++;
    else this.disgree++;
  }
}
