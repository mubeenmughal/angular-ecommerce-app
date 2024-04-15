import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() name: string | undefined;
  @Input() price: number | undefined;
  @Output() addedToCart = new EventEmitter<string>();

  addToCart() {
    this.addedToCart.emit(`${this.name} added to cart.`);
  }
}
