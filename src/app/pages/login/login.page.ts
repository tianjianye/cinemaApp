import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // loginForm: FormGroup;
  name: any;
  password: any;
  userInfo: any;
  showPassword = false;
  passwordToggleIcon = 'eye';
  constructor(public route: Router, private fb: FormBuilder,
              private userService: UserService
              ) {}
  ngOnInit() {
    this.ionViewWillEnter();
  }
  ionViewWillEnter() {
    sessionStorage.clear();
    this.name = '';
    this.password = '';
  }
  logForm() {
    this.userService.login(this.name,this.password);
  }
  signIn(){
    this.route.navigateByUrl("sign-up");
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon === 'eye'){
      this.passwordToggleIcon = 'eye-off';
    }
    else{
      this.passwordToggleIcon = 'eye'
    }
  }

}
