import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-select',
  template: `
    <div class="select">
      <button 
        #trigger 
        [ngClass]="triggerClasses" 
        [attr.disabled]="isDisabled ? true : null"
        (click)="toggleDropdown()"
      >
        <ng-content select="[select-label]"></ng-content>
        <span class="icon">
          <svg class="h-4 w-4 opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6 8l4 4 4-4H6z" />
          </svg>
        </span>
      </button>
      <div 
        #content 
        class="select-content" 
        [ngClass]="contentClasses" 
        *ngIf="isOpen"
      >
        <div class="viewport">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() isDisabled: boolean = false;
  @ViewChild('trigger', { static: true }) trigger!: ElementRef;
  @ViewChild('content', { static: false }) content!: ElementRef;

  isOpen: boolean = false;

  get triggerClasses(): string {
    return `flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm 
    ${this.isDisabled ? 'cursor-not-allowed opacity-50' : ''}`;
  }

  get contentClasses(): string {
    return `relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md`;
  }

  toggleDropdown(): void {
    if (!this.isDisabled) {
      this.isOpen = !this.isOpen;
    }
  }
}
