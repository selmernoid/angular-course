import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[shpNoScroll]'
})
export class NoScrollDirective {
  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    event.preventDefault();
  }

}
