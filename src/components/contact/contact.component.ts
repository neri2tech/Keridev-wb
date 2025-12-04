import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  // Fix: Add standalone: true. This is required for the 'imports' array and to enable proper dependency injection for FormBuilder.
  standalone: true,
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, CommonModule],
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  formStatus = signal<FormStatus>('idle');

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.formStatus.set('submitting');
    console.log('Form submitted!', this.contactForm.value);
    
    // Simulate API call
    setTimeout(() => {
      this.formStatus.set('success');
    }, 1000);
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
}