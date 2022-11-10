import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'group-forms',
  template: `
    <form #frm="ngForm" (ngSubmit)="onSubmit(frm)">
      <p *ngIf="addr.invalid">Address is Invalid</p>
      <div ngModelGroup="Addrs" #addr="ngModelGroup">
        City:: <input name="city" [ngModel]="Addrs.city" minlength="2"> <br>
        State:: <input name="state" [ngModel]="Addrs.state" required>
      </div> <br>

      <p *ngIf="em.touched && em.invalid">Email is Invalid</p>
      Email:: <input name="email" ngModel #em="ngModel" required pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$">
      <button type="submit">Submit</button>
    </form>
  `,
})
export class NgModelGroupComponent implements OnInit {

  Addrs = {
    city: 'ABC',
    state: 'XYZ'
  };

  onSubmit(frm: NgForm)
  {
    console.log(frm.value);
    console.log(frm.valid);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
