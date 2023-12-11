import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Product {
  id: number;
  name: string;
  price: number;
  date?: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class ProductModule { }
