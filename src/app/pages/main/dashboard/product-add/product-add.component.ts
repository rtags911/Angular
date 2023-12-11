import { Component } from '@angular/core';
import { Product } from 'src/app/core/module/product/product.module';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  newProduct: Product = {
    id: 0,
    name: '',
    price: 0,
    date: this.getCurrentDate(),
  };

  constructor(private productService: ProductsService) {}

  addProduct() {
    if (this.newProduct.name.trim() !== '' && this.newProduct.price > 0) {
      this.productService.addProduct({ ...this.newProduct });
      this.newProduct = { id: 0, name: '', price: 0 };
    }
  }

  private getCurrentDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
