import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.createForm();
  hide = true;

  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      isSave: [false]
    });
  }

}
