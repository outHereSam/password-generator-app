import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.sass',
})
export class OptionsComponent {
  @Input() charLength = 0;
  @Input() includeUppercase: boolean = false;
  @Input() includeLowercase: boolean = false;
  @Input() includeNumbers: boolean = false;
  @Input() includeSymbols: boolean = false;

  @Output() setIncludedUppercaseEvent = new EventEmitter<boolean>();
  @Output() setIncludedLowercaseEvent = new EventEmitter<boolean>();
  @Output() setIncludedNumbersEvent = new EventEmitter<boolean>();
  @Output() setIncludedSymbolsEvent = new EventEmitter<boolean>();

  @Output() generatePassEvent = new EventEmitter<any>();
  @Output() setSliderValueEvent = new EventEmitter<number>();

  setSliderValue(event: any) {
    this.charLength = event.target.value;
    this.setSliderValueEvent.emit(event.target.value);
  }

  setIncludeUppercase(event: any) {
    this.includeUppercase = event.target.checked;
    this.setIncludedUppercaseEvent.emit(event.target.checked);
  }

  setIncludeLowercase(event: any) {
    this.includeLowercase = event.target.checked;
    this.setIncludedLowercaseEvent.emit(event.target.checked);
  }

  setIncludeNumbers(event: any) {
    this.includeNumbers = event.target.checked;
    this.setIncludedNumbersEvent.emit(event.target.checked);
  }

  setIncludeSymbols(event: any) {
    this.includeUppercase = event.target.checked;
    this.setIncludedSymbolsEvent.emit(event.target.checked);
  }

  generateBtnClicked() {
    this.generatePassEvent.emit('Generate button clicked');
  }
}
