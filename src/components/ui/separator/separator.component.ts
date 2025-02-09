import { Component, Input, HostBinding, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-separator',
  template: ``,
  styleUrls: ['./separator.component.css'],
})
export class SeparatorComponent {
  @Input() orientation: 'horizontal' | 'vertical' = 'horizontal';
  @Input() decorative: boolean = true;
  @Input() customClass: string = '';

  @HostBinding('class') get separatorClasses(): string {
    const baseClass = 'shrink-0 bg-border';
    const orientationClass =
      this.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
    return `${baseClass} ${orientationClass} ${this.customClass}`;
  }

  @HostBinding('attr.aria-hidden') get isDecorative(): boolean {
    return this.decorative;
  }

  @Output() videoUploaded = new EventEmitter<{ videoId: string }>();
}
