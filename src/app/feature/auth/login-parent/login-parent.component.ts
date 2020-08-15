import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-parent',
  templateUrl: './login-parent.component.html',
  styleUrls: ['./login-parent.component.scss']
})
export class LoginParentComponent implements OnInit {
  fields = {
    primaryEmail: '',
    password: ''
  }
  constructor(private authService: AuthService,
    private dataService: DataService,
    public router: Router) { }

  ngOnInit(): void {
  }
  login(event) {
    if (this.dataService.loginCredentials.email == event.email &&
      this.dataService.loginCredentials.password == event.password) {
      this.authService.setLogin();
      this.router.navigateByUrl('/landing');
    }
    else {
      this.authService.setInvalidCredentials();
    }
  }
}
