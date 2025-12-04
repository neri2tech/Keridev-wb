import { Directive, ElementRef, afterNextRender, inject, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true,
})
export class ScrollAnimationDirective implements OnDestroy {
  private elementRef = inject(ElementRef);
  private observer?: IntersectionObserver;

  constructor() {
    afterNextRender(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.elementRef.nativeElement.classList.add('is-visible');
              this.observer?.unobserve(this.elementRef.nativeElement);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );
      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}