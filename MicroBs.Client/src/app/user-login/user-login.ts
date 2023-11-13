import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../services/user.service";
import { User } from "../models/user";

@Component({
    selector: 'app-login',
    templateUrl: './user-login.html',
    styleUrls: ['./user-login.scss']
})
export class UserLoginPage implements OnInit {

    loginForm: FormGroup;
    loginUser: any;

    username: string = '';
    password: string = '';

    constructor(private fb: FormBuilder, private router: Router, private userService: UserService){
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
          });
    }

    ngOnInit(): void {
        
    }
  
    onSubmit() {
        if (this.loginForm.valid) {
            // Add your authentication logic here
            console.log('Form submitted:', this.loginForm.value);
            // You can send the data to a service for authentication

            this.userService.LogIn(this.loginForm.value).subscribe( response => {
              this.loginUser = response;
              console.log(this.loginUser);
              this.router.navigate([`/employees`]);
            },
            error => {
              console.error(error);
              this.loginForm = error.error.message;
            });
        }
    }

    navigateToRegistration(){
        this.router.navigate(['/registration']);
    }

}