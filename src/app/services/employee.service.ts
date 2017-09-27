import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeeService{
    apiUrl = 'http://59ca04076a2cc600115b3da6.mockapi.io/employee/';

    constructor(private _http: Http){
    }
    GetList(): Observable<any[]>{
       return this._http.get(this.apiUrl).map((response : Response) => response.json());
    }
    GetDetail(id){
        return this._http.get(this.apiUrl + id).map((response: Response)  => response.json());
    }

    Update(id:number, data){
        return this._http.put(this.apiUrl + id, data).map((response: Response)  => response.json());
    }

    Add(data){
        return this._http.post(this.apiUrl, data).map((response: Response)  => response.json());
    }

    Delete(id:number){
        return this._http.delete(this.apiUrl + id).map((response: Response)  => response.json());
    }

    Search(keyword){
        return this._http.get(this.apiUrl + "?search=" + keyword).map((response : Response) => response.json());
    }
}