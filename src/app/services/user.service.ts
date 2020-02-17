import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';
import { Observable } from 'rxjs';
 
//The UserService class encapsulates in a reusable component all the functionality required to consume the REST controller API that we previously implemented in Spring Boot
@Injectable()
export class UserService {
  
  private usersUrl: string;
 
  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }
 //The findAll () method makes an HTTP GET request to http://localhost:8080/users via Angular's HttpClient.
 //The method returns an Observable instance that contains an array of User objects.
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
 
  //The save () method makes an HTTP POST request to http://localhost:8080/users
  public save(user: User) {
    //The type User is specified in the HttpClient request methods.
    return this.http.post<User>(this.usersUrl, user);
  }
}