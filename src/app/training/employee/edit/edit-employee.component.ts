import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";
import { EmployeeService } from "../../../services/employee.service";

@Component({
    selector: 'employee-edit',
    templateUrl: "./edit-employee.component.html",
    providers : [EmployeeService]
})

export class EditEmployeeComponent implements OnInit, OnDestroy {
    id: number;
    subscription: any;
    public employee;
    constructor(private router: Router, private activatedRoute: ActivatedRoute, private employeeService: EmployeeService) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.params.subscribe(params => {
            this.id = params['id'];
        })
        this.employeeService.GetDetail(this.id).subscribe((response: any) => {
            this.employee = response;
        });
    }
    
    edit(){
        this.employeeService.Update(this.id, this.employee).subscribe(response => {
            if(response){
                alert("Udate Success!");
                this.router.navigate(["/employee"]);
            }
        })
    }
    ngOnDestroy() {
        this.subscription.unsubscribe;
     }
}