import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login-save',
  templateUrl: './login-save.component.html',
  styleUrls: ['./login-save.component.scss']
})
export class LoginSaveComponent implements OnInit, OnDestroy {
  isButtonEnable: boolean = false;
  subscription: Subscription;
  errorSubscribe: Subscription
  loginCredentials = {
    email: '',
    password: ''
  }
  showError: boolean = false;

  @Output() loginEvent = new EventEmitter<any>();

  constructor(private authService: AuthService) {
    this.subscription = this.authService.getLoginCredentials().subscribe((response) => {
      this.loginCredentials.email = response.email;
      this.loginCredentials.password = response.password;
      this.isButtonEnable = response.isButtonEnable;
    });
    this.errorSubscribe = this.authService.getInvalidCredentials().subscribe((response) => {
      this.showError = response;
    })
  }

  ngOnInit(): void {
  }
  loginTrigger() {
    this.loginEvent.emit(this.loginCredentials);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.errorSubscribe.unsubscribe();
  }
}
