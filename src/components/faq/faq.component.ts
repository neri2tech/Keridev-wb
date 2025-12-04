import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ScrollAnimationDirective } from '../../scroll-animation.directive';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  faqs = signal<FaqItem[]>([
    {
      question: 'What kind of technologies do you specialize in?',
      answer: 'We specialize in modern web and mobile technologies, including Angular, React, and Node.js for development, and Gemini API for our AI-powered solutions. We are always exploring new tech to stay at the forefront of the industry.',
      open: true,
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on the scope and complexity. A simple website might take 4-6 weeks, while a complex mobile application could take 3-6 months. We provide a detailed project plan with milestones at the beginning of every project.',
      open: false,
    },
    {
      question: 'What is your process for starting a new project?',
      answer: 'Our process begins with a discovery phase to understand your goals and requirements. We then move to design and prototyping, followed by development, testing, and deployment. We believe in transparent communication and involve our clients at every step.',
      open: false,
    },
    {
      question: 'Do you offer support and maintenance after the project is live?',
      answer: 'Yes, we offer various support and maintenance packages to ensure your application remains up-to-date, secure, and performs optimally. We can tailor a package to fit your specific needs.',
      open: false,
    },
  ]);

  toggleFaq(index: number): void {
    this.faqs.update(faqs => {
      return faqs.map((faq, i) => {
        if (i === index) {
          return { ...faq, open: !faq.open };
        }
        // Optional: close other FAQs when one is opened
        // return { ...faq, open: false }; 
        return faq;
      });
    });
  }
}