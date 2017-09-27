import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from "./training/home.component";
import { EmployeeComponent } from "./training/employee/employee.component";
import { DetailEmployeeComponent } from './training/employee/detail/detail-employee.component';
import { InfoComponent } from "./training/form/info/info.component";
import { Training } from "./training/training/training.component";
import { NotFoundComponent } from './training/notfound/notfound.component';
import { DetailEmployeeOverViewComponent } from './training/employee/detail/over-view/over-view.component';
import { ProductEmployeeComponent } from './training/employee/detail/product/product-employee.component';
import { LoginComponent } from './training/login/login.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { CheckSaveFormGuard } from './guards/check-save-from.guard';
import { EditEmployeeComponent } from './training/employee/edit/edit-employee.component';
import { AddEmployeeComponent } from './training/employee/add/add-employee.component';

const routing: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component : LoginComponent },
    //{ path: '', redirectTo : 'employee', pathMatch: 'full' },
    //{ path: 'employee', component: EmployeeComponent, canActivate: [CheckLoginGuard]},
    { path: 'employee', component: EmployeeComponent},
    { path: 'employee/edit/:id', component: EditEmployeeComponent},
    { path: 'employee/add', component: AddEmployeeComponent},
    {
       // path: 'employee/detail/:id', component: DetailEmployeeComponent, canDeactivate: [CheckSaveFormGuard], children: [
        path: 'employee/detail/:id', component: DetailEmployeeComponent, children: [
            { path: 'over-view', component: DetailEmployeeOverViewComponent },
            { path: 'product', component: ProductEmployeeComponent },
        ]
    },
    { path: 'form', component: InfoComponent },
    { path: 'training', component: Training },
    { path: '**', component: NotFoundComponent }
];

export const AppRoute = RouterModule.forRoot(routing);