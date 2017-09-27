import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoute } from './app.routes';
import { HomeComponent } from './training/home.component';
import { Training } from './training/training/training.component';
import { ExponentialStrength } from './pipe/exponential-strength.pipe';
import { InfoComponent } from './training/form/info/info.component';
import { EmployeeComponent } from './training/employee/employee.component';
import { DetailEmployeeComponent } from './training/employee/detail/detail-employee.component';
import { EditEmployeeComponent } from './training/employee/edit/edit-employee.component';
//import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './training/notfound/notfound.component';
import { DetailEmployeeOverViewComponent } from './training/employee/detail/over-view/over-view.component';
import { ProductEmployeeComponent } from './training/employee/detail/product/product-employee.component';
import { LoginComponent } from './training/login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-from.guard';
import { LoginService } from './services/login.service';
import { AddEmployeeComponent } from './training/employee/add/add-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    Training,
    ExponentialStrength,
    EmployeeComponent,
    HomeComponent,
    NotFoundComponent,
    DetailEmployeeComponent,
    DetailEmployeeOverViewComponent,
    ProductEmployeeComponent,
    LoginComponent,
    EditEmployeeComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoute,
  ],
  providers: [
    // EmployeeService
    LoginService,
    CheckLoginGuard,
    CheckSaveFormGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
