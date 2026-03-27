import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpclient : HttpClient) { }

  additon(a: number, b: number): number {
    return a + b;
  }

  // GET : To get all user data in specific table
  // POST : To create new user.
  // DELETE : To to specific user.
  // PUT : you can modify/update existing user.
  // PATCH : update small change in existing user
  getUserData(Id?:any) {
    return this.httpclient.get(`https://jsonplaceholder.typicode.com/users`);
  }

  getPostData(Id?:any) {
    return this.httpclient.get(`https://jsonplaceholder.typicode.com/users`);
  }
}
