import {Injectable} from '@angular/core';

@Injectable()

export class LoginService{
    public _isLoggedIn : boolean;

    isLogged(){
        return this._isLoggedIn;
    }

    setLogin(isLoggedIn){
        this._isLoggedIn = isLoggedIn;
    }
}