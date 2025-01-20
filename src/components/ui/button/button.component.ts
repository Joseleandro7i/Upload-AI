import { Component, Input, HostBinding } from '@angular/core';

type Variant =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';

type Size = 'default' | 'sm' | 'lg' | 'icon';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: Variant = 'default';
  @Input() size: Size = 'default';
  @Input() asChild = false;

  // Additional properties can be added if needed
  @HostBinding('class') get classes() {
    return this.getButtonClasses();
  }

  private getButtonClasses(): string {
    const baseClasses = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50';
    
    const variantClasses = this.getVariantClasses();
    const sizeClasses = this.getSizeClasses();

    return `${baseClasses} ${variantClasses} ${sizeClasses}`.trim();
  }

  private getVariantClasses(): string {
    switch (this.variant) {
      case 'destructive':
        return 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90';
      case 'outline':
        return 'border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80';
      case 'ghost':
        return 'hover:bg-accent hover:text-accent-foreground';
      case 'link':
        return 'text-primary underline-offset-4 hover:underline';
      case 'default':
      default:
        return 'bg-primary text-primary-foreground shadow hover:bg-primary/90';
    }
  }

  private getSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'h-8 rounded-md px-3 text-xs';
      case 'lg':
        return 'h-10 rounded-md px-8';
      case 'icon':
        return 'h-9 w-9';
      case 'default':
      default:
        return 'h-9 px-4 py-2';
    }
  }
}