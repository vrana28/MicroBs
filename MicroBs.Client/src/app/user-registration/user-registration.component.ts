import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationPage {

  registrationForm: FormGroup;

    username: string = '';
    password: string = '';

    constructor(private fb: FormBuilder,
       private router: Router,
       private userService: UserService){
        this.registrationForm = this.fb.group({
          name: ['', Validators.required],
          username: ['', Validators.required],
          password: ['', Validators.required]
          });
    }

    ngOnInit(): void {
        
    }
  
    onSubmit() {
        if (this.registrationForm.valid) {
            // Add your authentication logic here
            
            console.log('Form submitted:', this.registrationForm.value);
            // You can send the data to a service for authentication
            this.userService.registerUser(this.registrationForm.value).subscribe( response => {
              console.log(response);
            },
            error => {
              console.error(error);
              this.registrationForm = error.error.message;
            }
          );
        }
    }

}
