import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ConstantsModel } from './core/models/constants.model';
import { ConfigOptionsService } from './core/services/config-options.service';
import { generatedString } from './core/services/generator.factory';
import { constantsToken } from './core/tokens/constants.token';

@Component({
  selector: 'shp-root',
  templateUrl: './shp.component.html',
  styleUrls: ['./shp.component.scss']
})
export class ShpComponent implements AfterViewInit, OnInit {
  title = 'My Best Shop Market';

  constructor(
    public configOptionsService: ConfigOptionsService,
    @Inject(generatedString) public myGeneratedString: string,
    @Inject(constantsToken) public constantsService: ConstantsModel,
  ) { }

  ngOnInit(): void {
    this.configOptionsService.setConfig({ login: 'my-login' });
  }

  @ViewChild('appTitle')
  titleElement!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.titleElement.nativeElement.innerHTML = this.title;
  }
}
