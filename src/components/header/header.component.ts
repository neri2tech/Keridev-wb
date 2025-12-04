import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ThemeToggleComponent],
})
export class HeaderComponent {
  isMenuOpen = signal(false);

  navLinks = [
    { path: '#home', label: 'Home' },
    { path: '#services', label: 'Services' },
    { path: '#portfolio', label: 'Portfolio' },
    { path: '#testimonials', label: 'Testimonials' },
    { path: '#about', label: 'About Us' },
    { path: '#faq', label: 'FAQ' },
    { path: '#contact', label: 'Contact' },
  ];

  toggleMenu() {
    this.isMenuOpen.update(open => !open);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}