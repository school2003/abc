import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
@Component({
  selector: 'tr[app-product-item]',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Input() index: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();


  removeItem(id: any) {
    this.onRemove.emit(id);
  }
  status: boolean = true;
  getInfo(product: IProduct) {
      console.log(product)
     
     if(this.status = !this.status){
      this.product = product;
     } 
    }
   
}
