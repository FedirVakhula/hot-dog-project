import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/models';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  public productsList: Product[] = [];
  constructor() { }

  ngOnInit() {
    const list = (localStorage.getItem('order'));
    if (list) {
      this.productsList = JSON.parse(list);
    }
  }

  updateList(product: Product): void {
    this.productsList = [...this.productsList, product];
  }

  onDeleteProductOfList(products: Product[]): void {
    this.productsList = products;
  }

  onChangeList(products: Product[]): void {
    this.productsList = products;
  }

  onSendOrder(): void {
    localStorage.setItem('order', JSON.stringify(this.productsList));
  }

}
