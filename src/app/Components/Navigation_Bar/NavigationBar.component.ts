import { Component, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { AdvService } from '../../Services/Adv.service';
import { LoginService } from '../../Services/Login.service';
import { CategoryService } from '../../Services/category.service';
import { UserService } from '../../Services/User.service';
import {IndexComponent} from '../IndexFile/IndexFile';

@Component({
    selector: 'my-navbar',
    templateUrl: `./NavigationBar.html`,
    styleUrls: ['./sidNav.css'],
    providers: [AdvService, LoginService, CategoryService, UserService]

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

    myEmail: any;
    myfname: any;
    mylname: any;
    myphone: any;
    myFlag: boolean = false;
    



    AdForm: FormGroup;
    constructor(private formBuilder: FormBuilder, private myAdvService: AdvService, private myLoginService: LoginService, private myCatService: CategoryService, private myUserService: UserService) {
        this.myCatService.getCategory().subscribe((data: any) => {

            for (let item of data) {
                this.Category.push(item.name);
            }
        });

        console.log(this.myFlag);

        this.myAdvService.getAction().subscribe((data: any) => {

            for (let item of data) {
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
        this.userName = username;
        this.password = pswd;
        console.log("Username and password in onSubmitLogin", this.userName, this.password);
        let obj = this.myLoginService.loginForm(this.userName, this.password);

        obj.subscribe((data) => {
            console.log(data);
            LoginService.AuthKey = data["auth-token"];
          //  LoginService.userId = data.data["userId"];
            console.log("in Auth Key variable", LoginService.AuthKey)
            if (LoginService.AuthKey != null && LoginService.AuthKey != "Login Unsuccessful") {
                this.myFlag = true;

                alert("Login Successful!!");

            }
            if (LoginService.AuthKey == "Login Unsuccessful") {
                alert("Login Failed");
            }
        });
        console.log("in Auth Key variableout", LoginService.AuthKey);


    }

    onMenuClick() {
        this.myLoginService.logoutUser().subscribe((data:any)=>console.log("logged out" + data));
        this.myFlag = false;
    }


    onSubmitReg(regObj: any) {
        console.log("In registration ...");
        this.mainAdObj = regObj;
        this.myLoginService.RegisterUser(regObj);
    }

    onSubmit(formObj: any) {

        if (LoginService.AuthKey == null) {
            alert("Please login to post Ad");
            console.log("Please login to post Ad");
            return;
        }
        console.log("In onSubmit");
        console.log(formObj);
        this.mainAdObj = formObj;


       /* let Advobj =
            {
                newid: this.id++,
                title: this.mainAdObj.title,
                category: this.mainAdObj.category,
                description: this.mainAdObj.description
            }*/
        console.log("this is adv object", formObj);
        this.myAdvService.postAd(formObj);

    }



    getMyAds() {

        if (LoginService.AuthKey == null) {
            alert("Please login to view Ads");
            console.log("Please login to view Ads");
            return;
        }
        //let adObj: any = this.myAdvService.getAllAds();
        
        this.myAdvService.getAllAds().subscribe((data: any) => {
            this.AllAdvertisement = [];
            for (let item of data) {
                this.AllAdvertisement.push(item);
            }
        console.log("getMyAds2: this.AllAdvertisement    ",this.AllAdvertisement)

        });
    }

    getMyInfo() {

        if (LoginService.AuthKey == null) {
            alert("Please login to view Ads");
            console.log("Please login to view Ads");
            return;
        }
        let uinfoObj = this.myUserService.userInfo().subscribe((data) => {
            console.log("data",data);
              for (let item of data) {
            this.myEmail = item["email"];
            this.myfname = item.firstName;
            this.mylname = item.lastName;
            this.myphone = item.phone;
              }
        });

        console.log("in getMyInfo");

    }

    deleteAdv(i: number) {
        console.log("In deleteAdv");
        let prod: Array<any> = [];
        prod = this.AllAdvertisement[i];
        let prId=this.AllAdvertisement[i].id;
        console.log("prId: ",prId);
        this.myAdvService.deletAdvService(prId).subscribe((data) => {
        });
        this.myAdvService.getAllAds().subscribe((data) => {
            this.AllAdvertisement = data;
        })
    }








}
