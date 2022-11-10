import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-example3',
  templateUrl: './routing-example3.component.html',
  styleUrls: ['./routing-example3.component.css']
})
export class RoutingExample3Component implements OnInit {

  status = [
    {course: 'CAP917', st: 'Pass'},
    {course: 'CAP918', st: 'Fail'},
    {course: 'CAP919', st: 'Reappear'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
