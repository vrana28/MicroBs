import { Component, Injectable } from '@angular/core';
import { User } from './models/user';
import { UserService } from './services/user.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MicroBs.Client';
  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit() : void {
    this.userService.getUsers().subscribe((result: User[]) => {
      this.users = result;
      console.log(this.users);
    });

  }

}
