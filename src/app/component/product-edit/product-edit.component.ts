import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/product';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  // product!: IProduct;
  // product: IProduct = {
  //   name: "",
  //   price: 0,

  // };
  product!: IProduct;
  productForm = this.formBuilder.group({
    name: [''],
    price: 0
  })
  constructor(private productService: ProductServicesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productService.getProduct(id).subscribe(product => {
           // Sản phẩm dựa theo ID
        this.product = product;
        this.productForm.patchValue({
          name: product.name,
          price: product.price
        })
      })
    })

  }
  onHandleEdit() {
    // this.productService.updateProduct(this.product).subscribe(data => {
    //   console.log(data)
    // })
    if (this.productForm.valid) {
      const product: IProduct = {
        id: this.product.id,
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }

      this.productService.updateProduct(product).subscribe(data => {
        console.log(data)
      })
    }

  }
}
