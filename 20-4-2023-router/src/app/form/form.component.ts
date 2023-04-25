import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  template:`
    <p>form works!</p>
<div>
  <form
  #signInForm="ngForm"
  (submit)="onSubmit(signInForm)"
  >
  <div>
    <span>Tài khoản</span>
    <input placeholder="Username" ngModel name="username" type="text">
  </div>

  <div>
    <span>Mật khẩu</span>
    <input required placeholder="Password" ngModel name="password" type="password">
  </div>

  <div>
    <button  type="submit">Sign in</button>
  </div>

  <pre>{{ signInForm.value | json }}</pre>

  </form>
</div>
  `
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form.value);
  }
}
