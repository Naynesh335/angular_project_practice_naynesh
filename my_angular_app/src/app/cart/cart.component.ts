import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: any = [
    {
      "id": 1,
      "p_name": "Hair Oil",
      "price": 40,
      "qunt_avl": 5,
      "manu_loc": "Suart",
      "presentstock":100,
      "add": 0,
      "cost":0,
      "imgs":"./../assets/images/hairoil.jpg"
    },
    {
      "id": 2,
      "p_name": "Facewash",
      "price": 50,
      "qunt_avl": 8,
      "manu_loc": "Bhavnagar",
      "presentstock": 118,
      "add": 0,
      "cost":0,
      "imgs":"./../assets/images/facewash.jpg"
    },
    {
      "id": 3,
      "p_name": "Baby Soap",
      "price": 15,
      "qunt_avl": 20,
      "manu_loc": "Nashik",
      "presentstock": 187,
      "add": 0,
      "cost":0,
      "imgs":"./../assets/images/babysoap.png"
    },
    {
      "id": 4,
      "p_name": "Shampoo",
      "price": 80,
      "qunt_avl":5,
      "manu_loc": "Suart",
      "presentstock": 99,
      "add": 0,
      "cost":0,
      "imgs":"./../assets/images/shampoo.jpg"
    },
    {
      "id": 5,
      "p_name": "Hair Wax",
      "price": 140,
      "qunt_avl": 35,
      "manu_loc": "Indor",
      "presentstock": 50,
      "add": 0,
      "cost":0,
      "imgs":"./../assets/images/hairwax.jpg"
    },{
      "id": 6,
      "p_name": "Hair Dryer",
      "price": 390,
      "qunt_avl": 50,
      "manu_loc": "Ahmedabad",
      "presentstock": 50,
      "add": 0,
      "cost":0,
      "imgs":"./../assets/images/hairdry.jpg"
    }
  ];

  total_pay=0;
  sendProduct(i:number)
    {
    if(this.products[i].qunt_avl>=1){
      this.products[i].add++;
     this.products[i].qunt_avl--;
     this.products[i].cost=this.products[i].add *this.products[i].price;
     this.total_pay=0;
     for(let i=0;i<this.products.length;i++)
     {
       this.total_pay += this.products[i].cost;
     }
    }
    }

}
