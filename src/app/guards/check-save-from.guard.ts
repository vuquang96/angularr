import { CanDeactivate } from "@angular/router";
import { Injectable } from '@angular/core';
import { DetailEmployeeComponent } from '../training/employee/detail/detail-employee.component';

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<DetailEmployeeComponent> {
    constructor(){

    }
    canDeactivate( component: DetailEmployeeComponent) {
       alert("You can not leave this page without saving data");
       return false;
    }
}