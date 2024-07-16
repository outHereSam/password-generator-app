import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratedPasswordComponent } from './components/generated-password/generated-password.component';
import { OptionsComponent } from './components/options/options.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneratedPasswordComponent, OptionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  generatedPass = 'PTx1f5DaFX';
  characterLength = 0;

  // Define  character sets
  uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  numbers = '0123456789';
  symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

  // User selections
  includeUppercase = false;
  includeLowercase = false;
  includeNumbers = false;
  includeSymbols = false;

  setIncludedUppercase(value: boolean) {
    this.includeUppercase = value;
  }

  setIncludedLowercase(value: boolean) {
    this.includeLowercase = value;
  }

  setIncludedNumbers(value: boolean) {
    this.includeNumbers = value;
  }

  setIncludedSymbols(value: boolean) {
    this.includeSymbols = value;
  }
}
