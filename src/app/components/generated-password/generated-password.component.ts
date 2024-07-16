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
}
