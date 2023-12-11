import { Component } from '@angular/core';
import { Product } from 'src/app/core/module/product/product.module';
import { ProductsService } from 'src/app/core/services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductsService) {
    this.products = this.productService.getProducts();
  }
}
