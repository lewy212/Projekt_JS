import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordSpecialValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordSpecialValidatorDirective, multi: true }]
})
export class PasswordSpecialValidatorDirective implements Validator {
  @Input('appPasswordSpecialValidator') allowedSpecialCharacters: string[];

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.allowedSpecialCharacters || !control.value) {
      return null;
    }
    const regexPattern = new RegExp(`[${this.allowedSpecialCharacters.join('')}]`);
    const isValid = regexPattern.test(control.value);

    return isValid ? null : { passwordSpecial: true };
  }
}
