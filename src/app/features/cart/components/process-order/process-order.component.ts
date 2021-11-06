import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

function getProperty<T>(o: T, propertyName: string): T[keyof T] {
  return o[(propertyName as keyof T)];
}
@Component({
  selector: 'shp-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.scss']
})
export class ProcessOrderComponent implements OnInit, OnDestroy {
  userForm: FormGroup;

  private destroy$: Subject<void> = new Subject();


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();

    this.selfPickup.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(value => this.setSelfPickup(value));
    this.userForm.valueChanges
      .subscribe(() => this.setValidationMessages());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  get firstName(): AbstractControl { return this.userForm.get('firstName')!; }
  get lastName(): AbstractControl { return this.userForm.get('lastName')!; }
  get email(): AbstractControl { return this.userForm.get('email')!; }
  get phones(): FormArray { return this.userForm.get('phones')! as FormArray; }
  get selfPickup(): AbstractControl { return this.userForm.get('selfPickup')!; }
  get address(): AbstractControl { return this.userForm.get('address')!; }


  getValidationMessageError(name: string) {
    return this.validationMessagesMap.get(name)?.message;
  }

  onAddPhone() {
    this.phones.push(this.fb.control(''));
  }
  onRemovePhone(phoneControl: AbstractControl) {
    this.phones.removeAt(this.phones.controls.indexOf(phoneControl));
  }

  onBlur(event: Event) {
    const controlName = (<HTMLTextAreaElement>event.target).getAttribute('formControlName');
    this.setValidationMessages(controlName ?? undefined);
  }

  private buildForm(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[A-ZА-Я].*$/)]],
      lastName: '',
      email: ['', [Validators.required]],
      phones: this.fb.array([this.fb.control('')]),
      selfPickup: false,
      address: ['', [Validators.required]],
    });
  }

  setSelfPickup(value: boolean) {
    if (!value) { this.address.setValidators(Validators.required); }
    else {
      this.address.clearValidators();
    }
    this.address.updateValueAndValidity();
  }

  private setValidationMessages(controlName?: string) {
    if (controlName) {
      this.buildValidationMessages(controlName);
    }
    else {
      this.validationMessagesMap.forEach((control, name) => {
        this.buildValidationMessages(name);
      });
    }
  }
  private buildValidationMessages(controlName: string) {
    const c: AbstractControl = getProperty(this, controlName) as any as AbstractControl;
    this.validationMessagesMap.get(controlName)!.message = '';
    if ((c.touched || c.dirty) && c.invalid && c.errors) {
      this.validationMessagesMap.get(controlName)!.message = Object.keys(c.errors)
        .map(key => getProperty(this.validationMessagesMap.get(controlName), key) as string)
        .find((v, index) => index == 0)
        ?.toString() ?? '';
    }
  }
  private validationMessagesMap = new Map([
    ['firstName', {
      message: '',
      required: 'Please enter your first name.',
      pattern: 'The first name must be started by capital character.',
    }],
    ['lastName', {
      message: '',
      required: 'Please enter your last name.',
    }],
    ['email', {
      message: '',
      required: 'Please enter your email address.',
      emailInvalid: 'Please enter a valid email address.',
    }],
    ['address', {
      message: '',
      required: 'Please enter your address.',
    }],
  ]);
}
