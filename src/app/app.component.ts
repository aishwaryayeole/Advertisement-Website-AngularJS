import { Component } from '@angular/core';
import { AdvService} from'./Services/Adv.service';
import { LoginService } from './Services/Login.service';
import { Http,HttpModule } from '@angular/http';


@Component({
  selector: 'my-app',
    template: `<my-navbar></my-navbar><my-index></my-index>`,
    providers: [AdvService,LoginService]
})
export class AppComponent  { 
    myFun(newAd:any)
    {
    //this.advService.advPush1(newAd);
    console.log(newAd);
    }
 }
