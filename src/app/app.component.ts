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
  generatedPass = '';
  characterLength = 0;
  progressBar = '';
  characterPool = '';
  passwordStrength = '';

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
    let progressWidth = (this.characterLength * 100) / 20;
    this.progressBar = progressWidth + '%';
    console.log(this.progressBar);
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
    this.characterPool = '';
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
    let numberOfTrues = 0;

    let selectionIncludes = [
      this.includeUppercase,
      this.includeLowercase,
      this.includeNumbers,
      this.includeSymbols,
    ];

    for (let i = 0; i < selectionIncludes.length; i++) {
      if (selectionIncludes[i] === true) {
        numberOfTrues += 1;
      }
    }

    // Validate the password
    if (this.generatedPass.length < 8) {
      this.passwordStrength = 'Too Weak!';
    } else if (this.generatedPass.length >= 8 && numberOfTrues === 1) {
      this.passwordStrength = 'Weak';
    } else if (
      this.generatedPass.length >= 8 &&
      this.generatedPass.length < 12 &&
      numberOfTrues >= 2
    ) {
      this.passwordStrength = 'Medium';
    } else if (this.generatedPass.length >= 12 && numberOfTrues >= 3) {
      this.passwordStrength = 'Strong';
    }

    console.log(this.passwordStrength);
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
