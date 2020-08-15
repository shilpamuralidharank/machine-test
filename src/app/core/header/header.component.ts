import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;
  subscription: Subscription;

  constructor(public router: Router,
    private authService: AuthService) {
    this.subscription = this.authService.getLogin().subscribe((response) => {
      this.isLoggedIn = response;
    });
  }

  ngOnInit(): void {
  }
  logoClick() {
    this.router.navigateByUrl('/home');
  }
  login() {
    this.router.navigateByUrl('/login');
  }
  logOut() {
    this.isLoggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
