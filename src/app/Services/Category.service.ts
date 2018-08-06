import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './Login.service';



@Injectable()
export class CategoryService {
    constructor(private _http: Http) { }

  getCategory()
  {
      return this._http.get('http://localhost:9099/xornet/items').map((response:Response)=>response.json());
  }

 
  catgoryType(cat:any)
  {
        let url = "http://localhost:9099/xornet/search?category="; //Akshay machine
        //let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', LoginService.AuthKey);
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        console.log("In category Service");
        return this._http.get(url+cat, options).map((response: Response) => response.json());
      

  }

}