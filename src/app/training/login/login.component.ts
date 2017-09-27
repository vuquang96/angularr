import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
    selector: "login-compoent",
    templateUrl: './login.component.html',
})
export class LoginComponent {
    constructor(private router: Router, private loginService: LoginService) {

    }

    submitLogin(value) {
        if (value.email == 'admin' && value.password == '123456') {
            this.loginService.setLogin(true);
            this.router.navigate(["/"]);
        } else {
            this.loginService.setLogin(false);
            alert("Fail login");
        }
    }
}