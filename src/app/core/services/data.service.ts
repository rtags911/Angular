import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private items: string[] = ['Item 1', 'Item 2', 'Item 3'];

  private numbers: number[] = Array.from(
    { length: 5 },
    (_, index) => index + 1
  );

  getNumbers(): number[] {
    return this.numbers;
  }

  incrementNumber(index: number): void {
    if (index >= 0 && index < this.numbers.length) {
      this.numbers[index]++;
    }
  }

  getItems(): string[] {
    return this.items;
  }

  addItem(item: string) {
    this.items.push(item);
  }

  removeItem(index: number) {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }
}
