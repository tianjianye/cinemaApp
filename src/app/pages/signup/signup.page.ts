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
  confirmedPassword: any;
  showPassword = false;
  showConfirmedPassword = false;
  passwordToggleIcon = 'eye';
  confirmedPasswordToggleIcon = 'eye';

  ngOnInit() {
  }
  
  signIn(){
    if(this.name){
      if(this.password == this.confirmedPassword && this.name){
        this.userService.signUp(this.name,this.password);
      }
      else{
        alert('Password Must Be The Same!');
      }
    }
    else{
      alert('Invalid name or password: Please try again! ');
    }
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
  toggleConfirmedPassword() {
    this.showConfirmedPassword = !this.showConfirmedPassword;
    if (this.confirmedPasswordToggleIcon === 'eye'){
      this.confirmedPasswordToggleIcon = 'eye-off';
    }
    else{
      this.confirmedPasswordToggleIcon = 'eye'
    }
  }

}
