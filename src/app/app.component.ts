import { Component } from '@angular/core';
import wordsArray from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';
  words = '';
  limit = 10;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generateWord() {
    this.words = wordsArray.slice(0, this.limit).join(' ');
  }
}
