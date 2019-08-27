import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Product } from 'src/app/interfaces/models';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  @Output() addProductToList: EventEmitter<Product> = new EventEmitter<Product>();

  public priceRoll: number = 5;
  public priceSausage: number = 15;
  public priceBavarianSausage: number = 20;
  public priceKetchup: number = 3;
  public priceMustard: number = 3;
  public priceMayonnaise: number = 3;
  public total: number = this.priceRoll;
  private id = 0;

  @ViewChild('sausage')
  private sausage: ElementRef;

  @ViewChild('mayonnaise')
  private mayonnaise: ElementRef;

  @ViewChild('mustard')
  private mustard: ElementRef;

  @ViewChild('ketchup')
  private ketchup: ElementRef;

  @ViewChild('bavarianSausage')
  private bavarianSausage: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addProduct(isAdded: boolean, value: number): void {
    if (isAdded) {
      this.total += value;
    } else {
      this.total -= value;
    }
  }

  onAdd(): void {
    console.log(this.sausage.nativeElement.checked);

    this.addProductToList.emit({
      id: Math.round((Math.random() * 100)),
      ingradients: {
        roll: {
          exist: true,
          price: this.priceRoll
        },
        ketchup: {
          exist: this.ketchup.nativeElement.checked,
          price: this.priceKetchup
        },
        sausage: {
          exist: this.sausage.nativeElement.checked,
          price: this.priceSausage
        },
        bavarianSausage: {
          exist: this.bavarianSausage.nativeElement.checked,
          price: this.priceBavarianSausage
        },
        mustard: {
          exist: this.mustard.nativeElement.checked,
          price: this.priceMustard
        },
        mayonnaise: {
          exist: this.mayonnaise.nativeElement.checked,
          price: this.priceMayonnaise
        },
      }
    });
  }

}
