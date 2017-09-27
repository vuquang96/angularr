import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from "../../../services/employee.service";

@Component({
    selector: 'employee-add',
    templateUrl: "./add-employee.component.html",
    providers : [EmployeeService]
})

export class AddEmployeeComponent {
    constructor(private router: Router, private employeeService: EmployeeService) {

    }
    
    add(value){
        this.employeeService.Add(value).subscribe(response => {
            if(response){
                alert("Add Success!");
                this.router.navigate(["/employee"]);
            }
        })
    }
}