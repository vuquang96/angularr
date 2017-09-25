import { Component, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() nameInput; // Input
    voted = false;
    @Output() onVote = new EventEmitter(); // Output
    names = ['quang', 'Linh', 'Trang'];
    uppercase = "HeLlo";
    today = Date.now();
    numberPercent = 1.43;
    number = 1.43245324324553;
    object = {one : 1, two : 2};
    collection = ['a', 'b', 'c', 'd', 'e'];

    onClick(value){
        this.contentClick = value;
    }
    clickNgClass(){
        this.clOne = !this.clOne;
        this.clTwo = !this.clTwo;
    }
    vote(agree){
        this.voted = false;
        this.onVote.emit(agree);
    }
}