import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../../services/user/user.service';
// import {RestaurantsService} from '../services/restaurants/restaurants.service';
// import {OrdersService} from '/services/orders/orders.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  name: any;
  password: any;
  userInfo: any;
  
  constructor(public route: ActivatedRoute, private fb: FormBuilder,
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
    this.buildLoginForm();
    this.userService.login(this.loginForm.value.name,this.loginForm.value.password);
  }
  signIn(){
    this.buildLoginForm();
    this.userService.signUp(this.loginForm.value.name,this.loginForm.value.password);
  }
  buildLoginForm() {
    this.loginForm = this.fb.group({
          name: [this.name],
          password: [this.password],
        }
    );
  }
}
