import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shp-root',
  templateUrl: './shp.component.html',
  styleUrls: ['./shp.component.scss']
})
export class ShpComponent implements AfterViewInit {
  title = 'My Best Shop Market';

  @ViewChild('appTitle')
  titleElement!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.titleElement.nativeElement.innerHTML = this.title;
  }
}
