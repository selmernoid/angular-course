import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from
  '@angular/forms';
// import { checkServiceLevel } from './custom.validators';
@Directive({
  selector: '[shpEmailValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator {
  private pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validate(c: AbstractControl): ValidationErrors | null {
    if (c.value !== undefined && !this.pattern.test(c.value)) {
      return {
        emailPattern: true
      };
    }
    return null;
  }
}
