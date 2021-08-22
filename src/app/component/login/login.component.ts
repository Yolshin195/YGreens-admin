import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User, UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup = this.createForm();
  hide: boolean = true;
  isMobile: boolean = false;

  constructor(private formBuilder: FormBuilder, breakpointObserver: BreakpointObserver, private router: Router, private userService: UserService) { 
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit(): void {
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
      isSave: [false]
    });
  }

  onSubmit() {
    this.userService.authenticate({username: this.form.value.phone, password: this.form.value.password, isSave: this.form.value.isSave}, (error:boolean, user: User) => {
      if (error) {
        console.log("Error!");
      } else {
        console.log('Login.components submit: ', user);
        this.router.navigateByUrl("/");
      }
    });
  }

}
