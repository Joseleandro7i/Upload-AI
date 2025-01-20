import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  template: `
    <textarea
      [ngClass]="className"
      [attr.placeholder]="placeholder"
      [attr.disabled]="disabled || null"
      [attr.rows]="rows"
      [attr.cols]="cols"
      [value]="value"
      (input)="onInput($event)"
      class="textarea-root"
    ></textarea>
  `,
  styleUrls: ['./textarea.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true,
    },
  ],
})
export class TextareaComponent implements ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() disabled: boolean = false;
  @Input() rows: number = 4; // Default row count
  @Input() cols: number = 40; // Default column count
  @Input() className: string = ''; // Custom class names
  value: string = '';

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  onInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
