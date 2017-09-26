import { Component, OnInit } from "@angular/core";

import { EmployeeService } from "../../services/employee.service";


@Component({
    selector : "employee",
    templateUrl : "./employee.component.html",
    providers : [EmployeeService]

})

export class EmployeeComponent implements OnInit {
    employees;
    constructor(public employeeService: EmployeeService){
    }
    ngOnInit(){
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        });
    }
}