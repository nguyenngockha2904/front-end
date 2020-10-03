import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHightlight]',
})
export class HightlightDirective {
  constructor(private element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'red';
    element.nativeElement.style.color = 'white';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
  }
}
