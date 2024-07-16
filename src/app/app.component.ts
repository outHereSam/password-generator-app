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
  generatedPass = 'P4$5W0rD!';
  characterLength = 0;
  characterPool = '';

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

  setCharLength(value: number) {
    this.characterLength = value;
  }

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

  // Combine the characters
  combineCharacters() {
    if (this.includeUppercase) {
      this.characterPool += this.uppercaseLetters;
    }
    if (this.includeLowercase) {
      this.characterPool += this.lowercaseLetters;
    }
    if (this.includeNumbers) {
      this.characterPool += this.numbers;
    }
    if (this.includeSymbols) {
      this.characterPool += this.symbols;
    }
  }

  // Generate random char
  generateRandomChar(str: string) {
    const randomIndex = Math.floor(Math.random() * str.length);
    return str[randomIndex];
  }

  // Determing password strength
  determinePasswordStrength() {
    let uppercaseCount;
    let lowercaseCount;
    let numberCount;
    let symbolCount;

    if (this.generatedPass.length < 8) {
      console.log('Too weak');
    }
  }

  generatePassword() {
    // Combine characters
    this.combineCharacters();

    // Generate password
    let password = [];
    let mandatoryChars = [];

    if (this.includeUppercase) {
      mandatoryChars.push(this.generateRandomChar(this.uppercaseLetters));
    }
    if (this.includeLowercase) {
      mandatoryChars.push(this.generateRandomChar(this.lowercaseLetters));
    }
    if (this.includeNumbers) {
      mandatoryChars.push(this.generateRandomChar(this.numbers));
    }
    if (this.includeSymbols) {
      mandatoryChars.push(this.generateRandomChar(this.symbols));
    }

    const remainingLength = this.characterLength - mandatoryChars.length;
    if (remainingLength > 0) {
      for (let i = 0; i < remainingLength; i++) {
        password.push(this.generateRandomChar(this.characterPool));
      }

      password = password.concat(mandatoryChars);
      password.sort(() => Math.random() - 0.5); // Shuffle the password

      this.generatedPass = password.join('');
    }
    this.determinePasswordStrength();
  }
}
