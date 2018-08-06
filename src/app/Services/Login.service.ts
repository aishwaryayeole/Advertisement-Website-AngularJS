import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { NavBar } from '../Components/Navigation_Bar/NavigationBar.component';



@Injectable()
export class LoginService {
    constructor(private _http: Http) { }

    static AuthKey: any;
    static userId: any;
    //static loginFlag: boolean = false;

    loginForm(userName: any, password: any) {
        let url = "http://localhost:9099/xornet/loginUser";
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "userName": userName, "password": password };
        return this._http.post(url, jsonReq, options).map((response: Response) => response.json());



    }

    logoutUser(){
        console.log("In logoutUser",LoginService.AuthKey);

        let url="http://localhost:9099/xornet/logoutUser";

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('auth-token', LoginService.AuthKey);
        
        let options = new RequestOptions({ headers: headers });
        //LoginService.AuthKey=null;

        alert("You have successfully logged out");
        return this._http.delete(url,options).map((response:Response)=>response.json());


    }



    RegisterUser(regObj: any) {
        let url = "http://localhost:9099/xornet/register"; 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {
            "firstName": regObj.fName,
            "lastName": regObj.lName,
            "userName": regObj.uName,
            "password": regObj.regpassword,
            "email": regObj.regEmailid,
            "phone": regObj.mobile
        }
        console.log("jsonReq", jsonReq);
        let adObj = this._http.post(url, jsonReq, options).map((response: Response) => response.json());
        adObj.subscribe((data) => 
            {
            if(data.data=="Successful")
                alert("Registration Successful !");
            else
                alert("Registration Unsuccessful !");
            }
        );
       
    }

}