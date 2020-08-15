import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page-top-section',
  templateUrl: './home-page-top-section.component.html',
  styleUrls: ['./home-page-top-section.component.scss']
})
export class HomePageTopSectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  redirectToLogin() {
    this.router.navigateByUrl('/login');
  }
}
