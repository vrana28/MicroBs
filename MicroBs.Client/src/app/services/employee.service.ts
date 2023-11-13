import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "Employees";
  constructor(private http: HttpClient) { }

  public getEmployees() : Observable <Employee[]> {
    return this.http.get<Employee[]>(`${environment.apiUrl}/${this.url}`);
  }

}
