import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../../services/employee.service";


@Component({
    selector: "employee",
    templateUrl: "./employee.component.html",
    providers: [EmployeeService]

})

export class EmployeeComponent implements OnInit {
    employees;
    pages = [1, 2, 3, 4, 5];
    currentPage: number;
    keyword;
    constructor(public employeeService: EmployeeService, private router: Router, 
                private activatedRoute: ActivatedRoute ) {
    }
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(params => {
            this.currentPage = params['paged'] || 1;
            console.log(this.currentPage);
        })
        this.loadData();
    }
    Delete(id){
        let confirmResult = confirm("Are you sure to delete Employee ?");
        if(confirmResult){
            this.employeeService.Delete(id).subscribe(response => {
                if(response){
                    alert("Delete success !");
                    this.loadData();
                }
            });
        }
    }
    loadData(){
        this.employeeService.GetList().subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log(error);
        });
    }
    search(){
        this.employeeService.Search(this.keyword).subscribe((response: any) => {
            this.employees = response;
        }, error => {
            console.log(error);
        });
    }
}