import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generated-password',
  standalone: true,
  imports: [],
  templateUrl: './generated-password.component.html',
  styleUrl: './generated-password.component.sass',
})
export class GeneratedPasswordComponent {
  @Input() generatedPassword = '';
  placeholder = 'P4$5W0rD!';
  copied = false;

  copyToClipboard() {
    if (this.generatedPassword !== '') {
      navigator.clipboard
        .writeText(this.generatedPassword)
        .then(() => {
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 3000);
        })
        .catch((err) => {
          console.error('Error in copying text: ', err);
        });
    }
  }
}
