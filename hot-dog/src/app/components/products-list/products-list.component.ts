import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interfaces/models';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input() productsList: Product[];
  @Output() delitProductFromList: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  @Output() changeList: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  // @Output() changeListOfProduct: EventEmitter<Product[]> = new EventEmitter<Product[]>();
  public totalPrice: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.totalPrice = 0;
    this.totalPrice = changes.productsList.currentValue.reduce((prev: number, curr: Product) => {
      for (const item in curr.ingradients) {
        if (curr.ingradients.hasOwnProperty(item)) {
          if (curr.ingradients[item].exist) {
            prev += curr.ingradients[item].price;
          }
        }
      }
      return prev;
    }, 0);
  }

  onDeleteProduct(product: Product): void {
    this.productsList = this.productsList.filter((item) => item.id !== product.id);
    this.delitProductFromList.emit(this.productsList);
  }

  onchangeIngradientProduct(product: Product): void {
    const index = this.productsList.findIndex((item) => item.id === product.id);
    this.productsList[index] = {...product};
    this.productsList.splice(index, 1, product);
    this.changeList.emit([...this.productsList]);
  }
}