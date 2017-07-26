import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AdvService } from '../../Services/Adv.service';
import { LoginService } from '../../Services/Login.service';
import { CategoryService } from '../../Services/category.service';




@Component({
    selector: 'my-navbar',
    templateUrl: `./NavigationBar.html`,
    styleUrls: ['./sidNav.css'],
    providers: [AdvService, LoginService, CategoryService]

})

export class NavBar {

    YourName: string = "Aishwarya";
    YourTitle: string = "New Ad";
    YourDescription: string = "Red Wooden big";
    Youremail: string = "aisdad";
    Yourmo: string = "4565123265";

    ActionList: string[] = [];
    Category: string[] = [];
    AllAdvertisement: any[] = [];
    id: number = 0;
    mainAdObj: any;
    userName: any;
    password: any;

    AdForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private myAdvService: AdvService, private myLoginService: LoginService, private myCatService: CategoryService) {
        this.myCatService.getCategory().subscribe((data: any) => {

            for (let item of data.data["itemList"]) {
                this.Category.push(item.name);
            }
        });

        this.myAdvService.getAction().subscribe((data: any) => {

            for (let item of data.data["actionList"]) {
                this.ActionList.push(item.name);
                console.log(this.ActionList);
            }
        });

        this.AdForm = this.formBuilder.group({
            name: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
            description: [null, [Validators.required]],
            title: [null, [Validators.required, Validators.minLength(4)]],
            mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            emailid: [null, [Validators.required]],
            category: [null]
        });
    }

    onSubmitLogin(username: any, pswd: any) {
        console.log("In onSubmit login");
        /*console.log(loginFormObj);
        this.userName = loginFormObj.userName;
        this.password = loginFormObj.password;*/
        this.userName = username;
        this.password = pswd;
        console.log("Username and password in onSubmitLogin", this.userName, this.password);
        this.myLoginService.loginForm(this.userName, this.password);

    }

    onSubmitReg(regObj: any) {
        console.log("In reg");
        this.mainAdObj = regObj;
        this.myLoginService.RegisterUser(regObj);
    }

    onSubmit(formObj: any) {
        console.log("In onSubmit");
        console.log(formObj);
        this.mainAdObj = formObj;


        let Advobj =
            {
                newid: this.id++,
                title: this.mainAdObj.title,
                name: this.mainAdObj.name,
                category: this.mainAdObj.category,
                description: this.mainAdObj.description
            }
        console.log("this is adv object", Advobj);
        //this.AdvEvent.emit(Advobj);
        this.myAdvService.postAd(Advobj);

    }

    getMyAds() {
        let adObj: any = this.myAdvService.getAllAds();

        this.myAdvService.getAllAds().subscribe((data: any) => {

            for (let item of data.data["mypostList"]) {
                this.AllAdvertisement.push(item);
            }
        });
    }

    deleteAdv(i: number) {
        let prod: Array<any> = [];
        prod = this.AllAdvertisement[i];

        this.myAdvService.deletAdvService(prod.id).subscribe((data) => {
        });
        this.myAdvService.getAllAds().subscribe((data) => {
            this.AllAdvertisement = data.data.mypostList;
        })
    }

    AdFromcloths()
    {
        
    }






}
