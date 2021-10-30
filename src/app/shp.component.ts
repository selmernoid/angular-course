import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { ShpState } from './core/@ngrx';
import { back, forward, goHome } from './core/@ngrx/router/router.actions';
import { ConstantsModel } from './core/models/constants.model';
import { AuthService } from './core/services/auth.service';
import { ConfigOptionsService } from './core/services/config-options.service';
import { generatedString } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { LocalStorageService } from './core/services/local-storage.service';
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
    public generatorService: GeneratorService,
    public storage: LocalStorageService,
    public authService: AuthService,
    @Inject(generatedString) public myGeneratedString: string,
    @Inject(constantsToken) public constantsService: ConstantsModel,
    private store: Store<ShpState>,
  ) { }

  ngOnInit(): void {
    this.storage.setData('ko', 10);
    this.configOptionsService.setConfig({ login: 'my-login' });
  }

  @ViewChild('appTitle')
  titleElement!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.titleElement.nativeElement.innerHTML = this.title;
  }

  addAdmin(): void {
    this.authService.addAdminRole();
  }
  removeAdmin(): void {
    this.authService.resetAdminRole();
  }

  onHome(): void { this.store.dispatch(goHome()); }
  onBack(): void {  this.store.dispatch(back()); }
  onForward(): void {  this.store.dispatch(forward()); }
}
