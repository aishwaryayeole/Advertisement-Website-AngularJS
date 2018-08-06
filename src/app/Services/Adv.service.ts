import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './Login.service';


@Injectable()
export class AdvService {
    constructor(private _http: Http) { }

    postAd(postAdObj: any) {
        let url = "http://localhost:9099/xornet/postad";
        let headers = new Headers();
        headers.append('auth-token', LoginService.AuthKey);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        //let jsonReq = { "title": postAdObj.title,  "category": postAdObj.category, "description": postAdObj.description };
        console.log("jsonReq", postAdObj);
        let adObj = this._http.post(url, postAdObj, options).map((response: Response) => response.json());
        adObj.subscribe((data) => console.log("My Adv in postAD method:-  ", data));

        alert("Advertisement Posted Successfully");
        //"name": postAdObj.name,
    }


    getAllAds() {
        let url = "http://localhost:9099/xornet/getads"; 
        let headers = new Headers();
        headers.append('auth-token', LoginService.AuthKey);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        return this._http.get(url, options).map((response: Response) => response.json());
        //adObj.subscribe((data) => console.log(data));
       // return adObj;
    }

    getAllUserAds()
    {
        let url="http://localhost:9099/xornet/getallads";

        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        console.log("In service");
        return this._http.get(url,options).map((response: Response) => response.json());
    }

    deletAdvService(id: any) {
        console.log("In deletAdvService");

        let url = 'http://localhost:9099/xornet/deleteAd?postId=';

        return this._http.delete(url + id).map((response: Response) => response.json());
    }

     getAction()
  {
      return this._http.get('http://localhost:9099/xornet/actions').map((response:Response)=>response.json());
  }




}