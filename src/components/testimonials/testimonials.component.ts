import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  testimonials = signal<Testimonial[]>([
    {
      quote: "KeriDev transformed our online presence. Their team's expertise and dedication were evident from day one. The results exceeded all our expectations.",
      author: 'Jane Doe',
      company: 'CEO, Tech Innovators Inc.'
    },
    {
      quote: "The mobile app they developed is flawless. It's intuitive, fast, and our users love it. A truly professional and talented team.",
      author: 'John Smith',
      company: 'Founder, FinTech Solutions'
    },
    {
      quote: "Their AI and marketing strategies gave us a significant competitive edge. We've seen a massive increase in engagement and conversions.",
      author: 'Emily White',
      company: 'Marketing Director, Global Retail'
    }
  ]);
}
