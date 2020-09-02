import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ipl',
  templateUrl: './ipl.component.html',
  styleUrls: ['./ipl.component.css'],
})
export class IplComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  teamName: string[] = [
    'Chennai Super Kings',
    'Mumbai Indians',
    'Rajasthan Royals',
    'Delhi Capitals',
    'Royal Challengers Bangalore',
    'Kolkata Knight Riders',
  ];

  website: string[] = [
    'https://www.chennaisuperkings.com/',
    'https://www.mumbaiindians.com/',
    'https://www.rajasthanroyals.com/',
    'https://www.delhicapitals.in/',
    'https://www.royalchallengers.com/',
    'https://www.kkr.in/',
  ];

  phoneNumber: string[] = [
    '965-144-6018',
    '1-522-714-2638 x 44611',
    '(038) 030-9641 x 7046',
    '005-851-7095 x 72027',
    '1-471-836-5871 x5841',
    '(247) 305 -7427',
  ];
}
