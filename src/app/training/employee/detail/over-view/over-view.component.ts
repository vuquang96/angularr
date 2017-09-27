import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from "rxjs";

@Component({
    selector: 'employee-over-view',
    template: `<h2>Over View</h2>`
})

export class DetailEmployeeOverViewComponent implements OnInit, OnDestroy{
    parrenId: number;
    subscription: any;
    public employee;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit() {
        this.subscription = this.activatedRoute.parent.params.subscribe(params => {
            this.parrenId = params['id'];
            console.log(this.parrenId);
        })
    }
    ngOnDestroy() {
       this.subscription.unsubscribe;
    }
}