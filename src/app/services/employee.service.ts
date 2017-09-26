import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
    apiUrl = 'http://59ca04076a2cc600115b3da6.mockapi.io/employee';

    constructor(private _http: Http){
    }
    GetList(): Observable<any[]>{
       return this._http.get(this.apiUrl).map((response : Response) => response.json());
    }
}