import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { NavBar }  from './Components/Navigation_Bar/NavigationBar.component';


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,NavBar ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
