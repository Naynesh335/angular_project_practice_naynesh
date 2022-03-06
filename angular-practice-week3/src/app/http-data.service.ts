import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private ht : HttpClient) { }


  getdata()
  {
    return this.ht.get(" http://localhost:3000/users");
  }

  userdata:any =[ {
    "fname":'abc',
     "lname":'bcd',
    "email" : 'a@gmail.com',
    "password" : 'a123',
    "address1" : 'aadd1',
   "city" : 'acity',
   "state" : 'astate',
   "zip": '1'
  }];





}
