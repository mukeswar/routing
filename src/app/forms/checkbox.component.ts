import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements OnInit {

  log(V1: any) {}
  onSubmit(frm: NgForm) {}

  city = [
    {id: 1, name: "ABC"},
    {id: 2, name: "DEF"},
    {id: 3, name: "GHI"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
