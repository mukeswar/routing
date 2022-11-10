import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-example',
  templateUrl: './routing-example.component.html',
  styleUrls: ['./routing-example.component.css']
})
export class RoutingExampleComponent implements OnInit {

  datesheet = [
    {course: 'CAP917', date: '12 nov'},
    {course: 'CAP918', date: '13 nov'},
    {course: 'CAP919', date: '14 nov'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
