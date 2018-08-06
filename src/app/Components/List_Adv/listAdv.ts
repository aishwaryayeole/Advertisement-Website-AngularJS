import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AdvService } from '../../Services/Adv.service';
import { LoginService } from '../../Services/Login.service';
import { CategoryService } from '../../Services/category.service';
import { NavBar } from '../Navigation_Bar/NavigationBar.component';
import { UserService } from '../../Services/User.service'

@Component({
    selector: 'list-ad',
    template: `    `,
    providers: [AdvService, LoginService, CategoryService, UserService]
})

export class Advcategory {



}