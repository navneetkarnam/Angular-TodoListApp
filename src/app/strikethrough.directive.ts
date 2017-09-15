import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({selector: '[myStrike]'})
export class StrikethroughDirective {

  @HostListener('click') onClick() {
    this.strikeout();
  }

  constructor(private  el: ElementRef) { }

  private strikeout() {
    if (this.el.nativeElement.style.textDecoration === 'line-through') {
      this.el.nativeElement.style.textDecoration = 'none';
    } else  {
      this.el.nativeElement.style.textDecoration = 'line-through';
    }
  }
}
