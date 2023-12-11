import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormat]',
})
export class CurrencyFormatDirective {
  @Input('appCurrencyFormat') price: number | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.price !== undefined) {
      const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(this.price);
      this.renderer.setProperty(
        this.el.nativeElement,
        'innerText',
        formattedPrice
      );
    }
  }
}
