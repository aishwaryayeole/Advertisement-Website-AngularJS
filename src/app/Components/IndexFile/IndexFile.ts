import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AdvService } from '../../Services/Adv.service';
import { LoginService } from '../../Services/Login.service';
import { CategoryService } from '../../Services/category.service';
import { NavBar } from '../Navigation_Bar/NavigationBar.component';
import { UserService } from '../../Services/User.service'
//import { Advcategory }  from '../../Components/List_Adv/listAdv';



@Component({
  selector: 'my-index',
  templateUrl: `./IndexFile.html`,
  providers: [AdvService, LoginService, CategoryService, UserService]
})

export class IndexComponent {

 tflag:boolean=true;

  Category: string[] = [];
  allUserAdv: any[] = [];
  AllAdvertisement: any[] = [];


  constructor(private formBuilder: FormBuilder, private myAdvService: AdvService, private myLoginService: LoginService, private myCatService: CategoryService, private myUserService: UserService) {
    this.myCatService.getCategory().subscribe((data: any) => {

      for (let item of data) {
        this.Category.push(item.name);
      }
    });

  }
  AllAdvertisements()
  {
    console.log("AllAdvertisements" );
          this.allUserAdv=[];
          this.AllAdvertisement=[];
    this.myAdvService.getAllUserAds().subscribe((data) => {
              for (let itemAd of data) {
        this.AllAdvertisement.push(itemAd);}
        })
        
        
  }

  AdvCategory(cat: any) {

    console.log("Recieved category" ,cat);
  
    let catObj = this.myCatService.catgoryType(cat);
    catObj.subscribe((data) => {
      this.AllAdvertisement=[];
      this.allUserAdv=[];
      console.log(data);
        for (let itemAd of data) {
        this.allUserAdv.push(itemAd);
        this.tflag=false;
      }

    });

    

    console.log("In Array",this.allUserAdv);


  }

}