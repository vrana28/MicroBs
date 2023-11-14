import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginPage } from './user-login/user-login';
import { UserRegistrationPage } from './user-registration/user-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';
import { ToastService } from './services/toast.service';
import { AddCustomer } from './customer/dialog/add-customer';

@NgModule({
  declarations: [
    AppComponent,

    // Pages
    UserLoginPage,
    UserRegistrationPage,
    EmployeeComponent,
    CustomerComponent,
    AddCustomer,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
