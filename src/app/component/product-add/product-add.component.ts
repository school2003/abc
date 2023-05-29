import { Component } from '@angular/core';
import { ProductServicesService } from 'src/app/services/product-services.service';
import { Validators, FormBuilder,FormGroup, FormControl } from '@angular/forms';
import { IProduct } from 'src/app/interface/product';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  // product = {
  //   name: '',
  //   price: 0,
  //   img: "https://picsum.photos/200/200"
  // };
  // constructor(private productService: ProductServicesService) {

  // }
  // onHandleAdd() {
  //   console.log(this.product);
  //   this.productService.addProduct(this.product).subscribe((data) => {
  //     console.log(data)
  //   }, error => console.log(error.message))
  // }



  // gicxdc = new FormGroup({
  //   name: new FormControl(''),
  //   price: new FormControl(0),
  // })
  constructor(private formBuilder: FormBuilder,
    private productService: ProductServicesService
    ) {
  }
  productForm = this.formBuilder.group({
    name: [''],
    price: [0]
  })
  onHandleSubmit() {
    // console.log(this.productForm.value)
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || "",
        price: this.productForm.value.price || 0,
      }
      this.productService.addProduct(product).subscribe(data => {
        console.log(data)
      })
    }
  }
}
