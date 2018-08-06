import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './Login.service';




@Injectable()
export class UserService {
    constructor(private _http: Http) { }


    userInfo() {
        let url = "http://localhost:9099/xornet/userdetails"; //Akshay machine
   
       let headers = new Headers();
        headers.append('auth-token', LoginService.AuthKey);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
       // let adObj = this._http.post(url,  options).map((response: Response) => response.json());
       // adObj.subscribe((data) => console.log("My Adv in postAD method:-  ", data));
               console.log("In User Info service");
        return this._http.get(url,options).map((response: Response) => response.json());


    }


}