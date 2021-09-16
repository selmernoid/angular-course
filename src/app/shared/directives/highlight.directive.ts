import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[shpHighlight]'
})
export class HighlightDirective {
  private hoveredClass: string = 'hovered';

  @HostListener('mouseenter', ['$event'])
  enter(event: MouseEvent): void {
    (event.target as Element).classList.add(this.hoveredClass);
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void {
    (event.target as Element).classList.remove(this.hoveredClass);
  }
}
