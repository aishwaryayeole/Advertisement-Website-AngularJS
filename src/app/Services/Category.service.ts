import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class CategoryService {
    constructor(private _http: Http) { }

  getCategory()
  {
      return this._http.get('http://192.168.3.144:9000/categories').map((response:Response)=>response.json());
  }

 
  catgoryCloths()
  {
        let url = "http://192.168.3.144:9000/posts/search?category=Cloths"; //Akshay machine
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

}