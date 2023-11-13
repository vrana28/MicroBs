import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginPage } from './user-login/user-login';
import { UserRegistrationPage } from './user-registration/user-registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { CustomerComponent } from './customer/customer.component';

export const routes: Routes = [
    {path:'', redirectTo:'/login', pathMatch: 'full'},

    // General
    {path:'login', component: UserLoginPage},
    {path:'registration', component: UserRegistrationPage},

    // Employee
    {path:'employees', component: EmployeeComponent},

    //Customers
    {path:'customers', component: CustomerComponent},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: false,
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            onSameUrlNavigation: 'reload',
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}