import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms.component.css']
})
export class Forms1Component implements OnInit {

  changeV1(val: any) {
    console.log(val.value);
  }

  submit(frm: any)
  {
    alert('Form submitted');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
