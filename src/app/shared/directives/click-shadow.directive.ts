import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[shpClickShadow]'
})
export class ClickShadowDirective {
  private state = 1;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() step: string;

  @HostListener('click')
  clicker() {
    this.state = Math.min(this.state + (+this.step), 1000);
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', `inset ${this.state}px 10px 15px 15px teal`);
  }
}
