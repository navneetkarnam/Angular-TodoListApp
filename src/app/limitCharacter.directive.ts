import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({selector: '[limitAlphaOnly]',
            host: {
                    '(keypress)': '_onKeypress($event)'
                  }
            })
export class LimitCharacterDirective {
key;

_onKeypress(event): void {
  this.key = event.keyCode;
  if ((this.key >= 8 && this.key <= 64) || (this.key >= 123) ) {
    alert('Enter only Alphabets a-z or A-Z');
    event.preventDefault();
  }
}
}
