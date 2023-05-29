import { Component } from '@angular/core';
import { IProduct } from 'src/app/interface/product';
import { ProductServicesService } from 'src/app/services/product-services.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductListComponent {
 
  status: boolean = false;
  productName = "";
  products: IProduct[] = []
  product!: IProduct;
//subscribe lắng nghe
  constructor(private kethuatu: ProductServicesService) {
    this.kethuatu.getProducts().subscribe(data => {
      this.products = data
    })
  }

 

  getValue(e: any) {
    this.productName = e.target.value;
  }
  changeStatus() {
    this.status = !this.status;
  }
  removeItem(id: any) {
    this.kethuatu.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item.id !== id)
    }, (error) => {
      console.log(error.message)
    })

  }
}


