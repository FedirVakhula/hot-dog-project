import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/interfaces/models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() changeIngradients: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() deleteProduct: EventEmitter<Product> = new EventEmitter<Product>();

  public total: number = 0;

  constructor() { }

  ngOnInit() {
    for (const item in this.product.ingradients) {
      if (this.product.ingradients.hasOwnProperty(item)) {
        if (this.product.ingradients[item].exist) {
          this.total += this.product.ingradients[item].price;
        }
      }
    }
  }

  addProduct(isAdded: boolean, value: number): void {
    if (isAdded) {
      this.total += value;
    } else {
      this.total -= value;
    }
    console.log('product', this.product);
    
    this.changeIngradients.emit(this.product);
  }

  onDelete(): void {
    this.deleteProduct.emit(this.product);
  }
}
