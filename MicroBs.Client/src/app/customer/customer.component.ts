import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { EmployeeComponent } from '../employee/employee.component';
import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  employees: Employee[] = [];
  customers: any[] = [];
  searchCustomerForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService, private customerService: CustomerService) {
    this.searchCustomerForm = this.fb.group({
      employee: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((result: Employee[]) => {
      this.employees = result;
      console.log(this.employees);
    });
  }

  selectItem(item: any): void {
    console.log('Selected item:', item);
    // Add your logic to handle the selected item
  }

  Search(){
    if (this.searchCustomerForm.valid) {

      console.log(this.searchCustomerForm.value);
      this.customerService.getCustomersByEmployeeId(this.searchCustomerForm.value.employee).subscribe((result: any[]) => {
        this.customers = result;
        console.log(this.customers);
      });
    }

  }
}
