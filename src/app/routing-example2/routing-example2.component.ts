import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-example2',
  templateUrl: './routing-example2.component.html',
  styleUrls: ['./routing-example2.component.css']
})
export class RoutingExample2Component implements OnInit {
  cap920: string = '';

  marks = [
    {course: 'CAP917', mks: '80'},
    {course: 'CAP918', mks: '90'},
    {course: 'CAP919', mks: '100'},
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
