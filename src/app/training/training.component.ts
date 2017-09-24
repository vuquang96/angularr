import { Component } from '@angular/core';

@Component({
    selector : "training",
    templateUrl : "./training.component.html",
    styleUrls : ["./training.component.css"],
})

export class Training{
    title = "Training";
    image = "http://lorempixel.com/200/200/";
    inputValue = "hello my input value";
    applyClass = true;
    applyStyle = true;
    contentClick = "";
    showLine = true;
    color = 'blue';
    colors = ['red', 'blue', 'yellow', 'green'];
    clOne = true;
    clTwo = true;
    styleColor = 'blue';
    styleBackground = 'red';

    onClick(value){
        this.contentClick = value;
    }
    clickNgClass(){
        this.clOne = !this.clOne;
        this.clTwo = !this.clTwo;
    }
}