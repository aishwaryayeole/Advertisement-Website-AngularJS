import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoginService {
    constructor(private _http: Http) { }

    static AuthKey: string;

    loginForm(userName: any, password: any) {
        let url = "http://192.168.3.144:9000/login"; //Akshay machine
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "userName": userName, "password": password };
        let adObj = this._http.post(url, jsonReq, options).map((response: Response) => response.json());
        adObj.subscribe((data) => {
           console.log(data);
            LoginService.AuthKey = data.data["auth-token"];
            console.log("in Auth Key variable", LoginService.AuthKey)
        });
    }


    RegisterUser(regObj:any) {
        let url = "http://192.168.3.144:9000/register"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {
            "firstName":regObj.fName,
            "lastName": regObj.lName,
            "userName": regObj.uName,
            "password": regObj.regpassword,
            "email": regObj.regEmailid,
            "phone": regObj.mobile
        }
        console.log("jsonReq", jsonReq);
        let adObj = this._http.post(url, jsonReq, options).map((response: Response) => response.json());
        adObj.subscribe((data) => console.log("My Adv in Reg method:-  ", data));

    }

}