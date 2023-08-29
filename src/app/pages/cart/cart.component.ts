import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
interface Transaction {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // {
  //   product: 'https://via.placeholder.com/150',
  //   name: 'snickers',
  //   price: 150,
  //   quantity: 1,
  //   id: 1,
  // },
  // {
  //   product: 'https://via.placeholder.com/150',
  //   // product:'https://imgs.search.brave.com/ubEgpQeGtaMXab92Ju16fqToaH7uTJcKaweirUiRskY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA',
  //   name: 'snickers',
  //   price: 160,
  //   quantity: 1,
  //   id: 1,

  // }
  displayedColumns: string[] = ['product','name','price','quantity','total'];
  transactions: Transaction[] = [
    {
      product: 'https://via.placeholder.com/150',
      name: 'snickers',
      price: 150,
      quantity: 1,
      id: 1,
    },
    {
      product: 'https://via.placeholder.com/150',
      // product:'https://imgs.search.brave.com/ubEgpQeGtaMXab92Ju16fqToaH7uTJcKaweirUiRskY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTQwMA',
      name: 'snickers',
      price: 160,
      quantity: 1,
      id: 1,

    }
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
