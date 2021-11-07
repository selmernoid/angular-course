import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AuthService } from './core/services/auth.service';
import { ConfigOptionsService } from './core/services/config-options.service';
import { ConstantsService } from './core/services/constants.service';
import { generatedString, GeneratorFactory } from './core/services/generator.factory';
import { GeneratorService } from './core/services/generator.service';
import { LocalStorageService } from './core/services/local-storage.service';
import { constantsToken } from './core/tokens/constants.token';
import { ShpComponent } from './shp.component';

describe('ShpComponent', () => {
  let component: ShpComponent;
  let fixture: ComponentFixture<ShpComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthService', ['addAdminRole', 'resetAdminRole']);
    await TestBed.configureTestingModule({
      declarations: [ShpComponent],
      providers: [
        ConfigOptionsService,
        GeneratorService,
        LocalStorageService,
        { provide: AuthService, useValue: authServiceSpy },
        { provide: constantsToken, useValue: ConstantsService },
        { provide: generatedString, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
        { provide: Store, useValue: {} },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct title', () => {
    // Arrange
    const titleElement = fixture.debugElement.query(By.css('h1'));
    const htmlElement = titleElement.nativeElement as HTMLElement;
    // Act
    fixture.detectChanges();
    // Assert

    expect(htmlElement.textContent).toEqual('My Best Shop Market');
  });

  it('should call AuthService when clicked on Admin button', () => {
    // Arrange
    const adminElements = fixture.debugElement.queryAll(By.css('.role-act'));
    const addRoleElement = adminElements.find((el) => (el.nativeElement as HTMLElement).textContent == 'Add Admin Role');
    // Act
    expect(addRoleElement).toBeDefined();
    addRoleElement!.triggerEventHandler('click', null);
    fixture.detectChanges();
    // Assert
    expect(authServiceSpy.addAdminRole.calls.any()).toBeTrue();
  });
});
