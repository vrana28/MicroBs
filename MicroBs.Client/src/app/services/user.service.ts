import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "User";
  constructor(private http: HttpClient) { }

  public getUsers() : Observable <User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
  }

  public registerUser(userRegistration: User): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/${this.url}`, userRegistration);
  }

  public LogIn (request: User) : Observable<User | null> {

    const body = <any>request;
    return this.http.post<User>(`${environment.apiUrl}/${this.url}/Login`,body,
    {
      responseType: 'json',
      observe: 'response',
      withCredentials: false,
      params: new HttpParams({fromObject: body})
    }).pipe(map(response => response.body));
  }
}
