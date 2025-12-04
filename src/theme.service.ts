import { Injectable, signal, effect } from '@angular/core';

type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme = signal<Theme>('dark');

  constructor() {
    const initialTheme = (localStorage.getItem('theme') as Theme) || this.getSystemTheme();
    this.theme.set(initialTheme);

    effect(() => {
      const currentTheme = this.theme();
      localStorage.setItem('theme', currentTheme);
      if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    });
  }

  private getSystemTheme(): Theme {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  toggleTheme() {
    this.theme.update((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }
}