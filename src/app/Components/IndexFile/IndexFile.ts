import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AdvService } from '../../Services/Adv.service';
import { LoginService } from '../../Services/Login.service';
import { CategoryService } from '../../Services/category.service';


@Component({
  selector: 'my-index',
    templateUrl: `./IndexFile.html`,
    providers: [AdvService,LoginService]
})

export class IndexComponent  { 
   
 }
