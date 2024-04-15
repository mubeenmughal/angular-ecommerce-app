// app.component.ts
import { Component, OnInit } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 1, name: 'Apple', price: 999 },
    { id: 2, name: 'Banana', price: 999 },
    { id: 3, name: 'Cherry', price: 999 }
  ];

  searchTerm: string = '';
  filteredProducts: Product[] = [];

  ngOnInit() {
    this.filteredProducts = this.products;
  }

  ngOnChanges() {
    this.filterProducts();
  }

  filterProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onAddedToCart(message: string) {
    console.log(message);
  }
}
