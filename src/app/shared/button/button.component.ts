import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type IconSide = 'left' | 'right';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  host: {
    '[class.app-button]': 'true',
    '[class.primary]': 'variant() === "primary"',
    '[class.secondary]': 'variant() === "secondary"',
    '[class.outline]': 'variant() === "outline"',
    '[class.text]': 'variant() === "text"'
  }
})
export class ButtonComponent {
  text = input('');
  variant = input<ButtonVariant>('primary');
  icon = input<string>(''); 
  iconSide = input<IconSide>('left');
  isSvg = input<boolean>(false);
}
