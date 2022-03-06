import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  constructor(private Info: HttpDataService) { }

  ngOnInit(): void {
  }

  ngForm:any;

  user:any =[ {
     "fname":'abc',
     "lname":'bcd',
      "email" : 'a@gmail.com',
      "password" : 'a123',
      "address1" : 'aadd1',
     "city" : 'acity',
     "state" : 'astate',
     "zip": '1'
    }];
     
    onSubmitofform(user:any)
    {
      this.Info.userdata.push(user);
    }

}
