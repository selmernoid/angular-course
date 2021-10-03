import { NgModule } from '@angular/core';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { generatedString, GeneratorFactory } from './services/generator.factory';
import { constantsToken } from './tokens/constants.token';
import { LocalStorageService, shopLocalStorage } from './services/local-storage.service';
import { SharedModule } from '../shared/shared.module';

const EXPORTED_COMPONENTS: any[] = [
];
const LOCAL_COMPONENTS: any[] = [
];

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS,
    ...LOCAL_COMPONENTS
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ],
  imports: [
    SharedModule
  ],
  providers: [
    ConfigOptionsService,
    GeneratorService,
    { provide: constantsToken, useValue: ConstantsService },
    { provide: LocalStorageService, useValue: shopLocalStorage },
    { provide: generatedString, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
  ]
})
export class CoreModule { }
