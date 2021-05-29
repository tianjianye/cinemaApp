import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(public route: ActivatedRoute, private userService: UserService) { }

  name: any;
  password: any;

  ngOnInit() {
  }
  
  signIn(){
    this.userService.signUp(this.name,this.password);
  }

}
