import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from './services/config-options.service';
import { ConstantsService } from './services/constants.service';
import { GeneratorService } from './services/generator.service';
import { generatedString, GeneratorFactory } from './services/generator.factory';
import { constantsToken } from './tokens/constants.token';

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
    CommonModule
  ],
  providers: [
    ConfigOptionsService,
    { provide: constantsToken, useValue: ConstantsService },
    { provide: generatedString, useFactory: GeneratorFactory(15), deps: [GeneratorService] },
  ]
})
export class CoreModule { }
