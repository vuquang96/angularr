import { Component } from '@angular/core';

@Component({
    selector : "form-info",
    templateUrl : "./info.component.html",
    styleUrls : ['./info.component.css']
})

export class InfoComponent{
    cities = [
        {id : 1, name : "Hà Nội"},
        {id : 2, name : "Hồ chí minh"},
        {id : 3, name : "Đà Nẵng"},
    ];
    onSubmit(value){
        console.log(value);
    }
}