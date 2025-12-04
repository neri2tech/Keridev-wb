import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-about',
  // Fix: Make component standalone. The 'imports' property requires this.
  standalone: true,
  templateUrl: './about.component.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {}