import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { Training } from './training/training.component';
import { ExponentialStrength } from './pipe/exponential-strength.pipe';
import { InfoComponent } from './training/form/info/info.component';
import { EmployeeComponent } from './training/employee/employee.component';
//import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    Training,
    ExponentialStrength,
    EmployeeComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    // EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
