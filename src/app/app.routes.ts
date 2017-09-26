import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HomeComponent} from "./training/home.component";
import { EmployeeComponent } from "./training/employee/employee.component";
import { InfoComponent } from "./training/form/info/info.component";
import { Training } from "./training/training/training.component";

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path : 'form', component : InfoComponent },
    { path : 'training', component : Training }
];

export const AppRoute = RouterModule.forRoot(routing);