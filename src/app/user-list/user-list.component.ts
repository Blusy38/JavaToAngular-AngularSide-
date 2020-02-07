import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

 //The implementation of the UserListComponent class makes it possible to use the findAll () method of UserService
 // to retrieve all persistent entities in the database and store them in the users field.
export class UserListComponent implements OnInit {
 
  users: User[];

  constructor(private userService: UserService) {
  }
 
  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
}