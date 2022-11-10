import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-example1',
  templateUrl: './routing-example1.component.html',
  styleUrls: ['./routing-example1.component.css']
})
export class RoutingExample1Component implements OnInit {

  grades = [
    {course: 'CAP917', grade: 'A'},
    {course: 'CAP918', grade: 'B'},
    {course: 'CAP919', grade: 'C'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
