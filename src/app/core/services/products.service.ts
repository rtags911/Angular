import { Injectable } from '@angular/core';
import { Product } from '../module/product/product.module';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  
  private products: Product[] = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Smartphone', price: 499 },
    { id: 3, name: 'Headphones', price: 79 },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}
