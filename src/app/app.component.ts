import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'valentine invitation';

  noButtonTexts: string[] = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Are you positive???',
    'Pookie please',
    'Just think about it',
    "If you say no, I'll be very sad",
    "I'll be very very sad",
    "I'll be very very very sad",
    "I'll be very very very very sad",
    "Ok fine, I'll stop asking...",
    'Just kidding, PLEASE SAY YES',
    "I'll be very very very very very sad",
    "You're breaking my heart ;(",
    'I disabled myself, now click yes',
  ];
  currentNoButtonTextIndex: number = 0;
  yesButtonScale: number = 1; // Start scale
  noButtonDisabled: boolean = false; // New property to track "No" button state
  noButtonMargin: string = '0px'; // New property to track "No" button margin

  clickNoAgain: boolean = false;

  get noButtonText(): string {
    return this.noButtonTexts[this.currentNoButtonTextIndex] || 'No';
  }

  onNoClick(): void {
    if (this.currentNoButtonTextIndex < this.noButtonTexts.length - 1) {
      this.currentNoButtonTextIndex++;
      this.yesButtonScale += 0.5;
      this.noButtonMargin = `${this.currentNoButtonTextIndex * 10}px`; // Increase margin
    } else {
      this.noButtonDisabled = true; // Disable the "No" button at the end
    }
  }

  onYesClick(): void {
    alert('I LOVE YOU!');
    this.yesButtonScale = 1; // Reset scale
  }
}
