import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-label',
  template: `
    <label 
      [ngClass]="labelClass" 
      [attr.for]="htmlFor" 
      [attr.disabled]="isDisabled ? true : null"
    >
      <ng-content></ng-content>
    </label>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LabelComponent),
      multi: true,
    },
  ],
})
export class LabelComponent implements ControlValueAccessor {
  @Input() htmlFor: string = ''; // Equivalent to the "for" attribute
  @Input() isDisabled: boolean = false; // Handle the "peer-disabled" logic
  @Input() additionalClasses: string = ''; // Allow additional classes

  // Combine base classes with additional ones
  get labelClass(): string {
    const baseClass =
      'text-sm font-medium leading-none cursor-not-allowed opacity-70';
    const enabledClass = this.isDisabled ? '' : 'peer-disabled:opacity-70';
    return `${baseClass} ${enabledClass} ${this.additionalClasses}`;
  }

  // Implementation for ControlValueAccessor (not strictly necessary for this case)
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {}
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
