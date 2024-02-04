import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
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

  listedNames: string[] = ['Sofie', 'Sara'];
  currentNoButtonTextIndex: number = 0;
  yesButtonScale: number = 1;
  noButtonDisabled: boolean = false;
  noButtonMargin: string = '0px';

  clickNoAgain: boolean = false;
  nameListed: boolean = false;
  partnerName: string = '';

  ngOnInit() {
    const params = new URLSearchParams(window.location.search);
    this.partnerName = params.get('partner') || '';
    if (this.listedNames.includes(this.partnerName)) {
      this.nameListed = true;
    }
  }

  get noButtonText(): string {
    return this.noButtonTexts[this.currentNoButtonTextIndex] || 'No';
  }

  onNoClick(): void {
    if (this.currentNoButtonTextIndex < this.noButtonTexts.length - 1) {
      this.currentNoButtonTextIndex++;
      this.yesButtonScale += 0.5;
      this.noButtonMargin = `${this.currentNoButtonTextIndex * 10}px`;
    } else {
      this.noButtonDisabled = true;
    }
  }

  onYesClick(): void {
    alert(`I LOVE YOU ${this.partnerName}!`);
    this.yesButtonScale = 1; // Reset scale
  }
}
