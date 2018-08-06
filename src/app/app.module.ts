import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavBar }  from './Components/Navigation_Bar/NavigationBar.component';
import { IndexComponent }  from './Components/IndexFile/IndexFile';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AdvService} from './Services/Adv.service'
import {LoginService} from './Services/Login.service'
import { CategoryService } from './Services/category.service';
import { Http,HttpModule } from '@angular/http';
import {UserService} from './Services/User.service'
import { Advcategory }  from './Components/List_Adv/listAdv';





@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule,HttpModule ],
  declarations: [ AppComponent,NavBar,IndexComponent,Advcategory ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
