import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  img_url1=".././assets/images/coffeeshop1.jpg";
  img_url2=".././assets/images/coffeeshop2.jpg";
  img_url3=".././assets/images/coffeeshop3.jpg";
  img_url4=".././assets/images/coffeeshop4.jpg";
}
