import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface PortfolioItem {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
})
export class PortfolioComponent {
  portfolioItems = signal<PortfolioItem[]>([
    {
      image: 'https://picsum.photos/id/1/800/600',
      title: 'E-commerce Platform',
      description: 'A scalable online store with a custom CMS and payment gateway integration.',
      tags: ['Angular', 'TypeScript', 'Node.js', 'UI/UX']
    },
    {
      image: 'https://picsum.photos/id/10/800/600',
      title: 'AI-Powered Chatbot',
      description: 'An intelligent chatbot for customer service, improving user engagement and support.',
      tags: ['AI', 'Python', 'NLP', 'Gemini API']
    },
    {
      image: 'https://picsum.photos/id/20/800/600',
      title: 'Mobile Banking App',
      description: 'A secure and intuitive mobile app for on-the-go banking and financial management.',
      tags: ['iOS', 'Android', 'Security']
    },
    {
      image: 'https://picsum.photos/id/30/800/600',
      title: 'Marketing Analytics Dashboard',
      description: 'A data visualization tool to track campaign performance and user metrics in real-time.',
      tags: ['D3.js', 'Google Ads', 'BigQuery']
    },
    {
      image: 'https://picsum.photos/id/40/800/600',
      title: 'Corporate Rebranding',
      description: 'A complete visual overhaul for a major tech company, including logo, website, and branding materials.',
      tags: ['Graphic Design', 'Branding']
    },
    {
      image: 'https://picsum.photos/id/50/800/600',
      title: 'Social Media Campaign',
      description: 'A viral marketing campaign that boosted brand awareness by 300% across multiple platforms.',
      tags: ['Marketing', 'Facebook Ads']
    }
  ]);
}
