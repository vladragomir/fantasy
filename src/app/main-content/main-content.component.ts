import {Component, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) {
  }

  ngOnInit() {
  }

  onBooking() {
    this.document.location.href = 'https://www.booking.com/hotel/ro/villa-fantasy.ro.html';
  }

}
