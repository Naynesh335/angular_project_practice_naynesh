import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private ht: HttpDataService, private fb:FormBuilder) { }

  myForm:any;
  users:any

  ngOnInit(): void {

    this.ht.getdata().subscribe((data) => this.Display(data));

    this.myForm = this.fb.group({
      userId:['',Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      emailAddress:[ '', [Validators.required,Validators.email]]
    });
  }

  Display(data:any)
  {
    this.users=data;
  }

postdata()
{
console.log(this.myForm);
}

}
