import { Component, OnInit } from '@angular/core';
import { HttpDataService } from '../http-data.service';

@Component({
  selector: 'app-show-template-form-data',
  templateUrl: './show-template-form-data.component.html',
  styleUrls: ['./show-template-form-data.component.css']
})
export class ShowTemplateFormDataComponent implements OnInit {

  constructor(public Info: HttpDataService) { }

  ngOnInit(): void {
  }

}
