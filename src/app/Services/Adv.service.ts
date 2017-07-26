import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdvService {
    constructor(private _http: Http) { }

    postAd(postAdObj: any) {
        let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', '5976eb951c0edf75e32798e8');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = { "title": postAdObj.title, "name": postAdObj.name, "category": postAdObj.category, "description": postAdObj.description };
        console.log("jsonReq", jsonReq);
        let adObj = this._http.post(url, jsonReq, options).map((response: Response) => response.json());
        adObj.subscribe((data) => console.log("My Adv in postAD method:-  ", data));

    }


    getAllAds() {
        let url = "http://192.168.3.144:9000/posts"; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', '5976eb951c0edf75e32798e8');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let adObj = this._http.get(url, options).map((response: Response) => response.json());
        adObj.subscribe((data) => console.log(data));
        return adObj;
    }


    deletAdvService(id: any) {
        let url = 'http://192.168.3.144:9000/post?postId=';
        return this._http.delete(url + id).map((response: Response) => response.json());
    }

     getAction()
  {
      return this._http.get('http://192.168.3.144:9000/actions').map((response:Response)=>response.json());
  }



}