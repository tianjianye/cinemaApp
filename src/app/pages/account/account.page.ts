import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  userInfo: any;
  constructor(private router: Router) { }
  ionViewWillEnter(){
    this.userInfo = JSON.parse(window.sessionStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.ionViewWillEnter();
  }
  
  change(option:string) {
    if(option!='id'){
      this.router.navigate(['account-update'],{queryParams: {option: option}});
    }
  }

  signOut(){
    window.sessionStorage.clear();
    this.router.navigateByUrl('login').then();
  }
  sortNull() {}
}
