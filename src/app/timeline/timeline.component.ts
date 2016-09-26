import { Component, OnInit } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent implements OnInit {
  today: Date;
  days: number[] = [];
  rooms: number[] = [];
  widthColumn: number;
  qtyDays: number = 15;

  constructor() {
    this.today = new Date();
    this.createDays();
    this.createRooms();

  }

  ngOnInit(): void {
    let timeLineWidth: number = document.querySelector('.timeline').clientWidth;
    this.widthColumn = timeLineWidth / this.qtyDays;
  }

  createDays(): void {
    let today: Date = new Date();
    today.setDate(today.getDate() - 5);
    for(let i = 1; i < this.qtyDays; i++) {
      this.days.push(today.setDate(today.getDate() + 1));
    }
  }

  createRooms(): void {
    for(let i = 1; i < 170; i++) {
      this.rooms.push(i);
    }
  }

  nextClick(): void {
    console.log('click');
  }

}