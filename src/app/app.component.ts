import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ygreens-admin';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    if (!this.userService.authenticated) {
      this.router.navigateByUrl("/login");
    }
  }
}
