import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  isShow: boolean;
  topPosToStartShowing = 100;

	@HostListener('window:scroll') checkScroll() {
		const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		if (scrollPosition >= this.topPosToStartShowing) {
			this.isShow = true;
		} else {
			this.isShow = false;
		}
	}
  constructor() { }

  ngOnInit(): void {
  }
  /* Scroll Top */
  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
