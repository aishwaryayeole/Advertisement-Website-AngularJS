import { Component,EventEmitter } from '@angular/core';
import { FormGroup,FormControl,Validators,ReactiveFormsModule,FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-navbar',
  templateUrl: `./NavigationBar.html`,
  styleUrls: ['./sidNav.css']
})

export class NavBar  
{ 
    YourName:string="Aishwarya";
    Category:string[] =["Clothes","Mobile","Furniture","Real Estate"];
    id:number=0;
    name2:any;
    cat2:any;
    desc2:any;
    obj:any;


    public childEvent= new EventEmitter<any>();
    onChange(name:any,cat:string,desc:any) 
    { 

        let newobj =
        {
            newid: this.id++,
            newName:name,
            newCat:cat,
            newDesc:desc
        }

      this.childEvent.emit(newobj);
    } 





}
