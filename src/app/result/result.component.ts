import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  displayedColumns: string[] = ['date', 'distance', 'time', 'speed', 'options'];
  dataSource = [
    {date: '2018-04-07', 'distance': 5000, time: '42:30', speed: 'H', options: ''},
    {date: '2018-04-07', 'distance': 5000, time: '42:30', speed: 'H', options: ''},
    {date: '2018-04-07', 'distance': 5000, time: '42:30', speed: 'H', options: ''},
    {date: '2018-04-07', 'distance': 5000, time: '42:30', speed: 'H', options: ''},
    {date: '2018-04-07', 'distance': 5000, time: '42:30', speed: 'H', options: ''},
    {date: '2018-04-07', 'distance': 5000, time: '42:30', speed: 'H', options: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
