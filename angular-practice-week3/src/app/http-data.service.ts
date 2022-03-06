import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor() { }

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
