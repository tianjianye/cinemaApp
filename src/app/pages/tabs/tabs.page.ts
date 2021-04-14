import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  userInfo: any;

  constructor(private router:Router) {}
  ionViewWillEnter(){
    this.userInfo = JSON.parse(window.sessionStorage.getItem('currentUser'));
  }
  goToAccountPage(){
    this.router.navigateByUrl('account').then(() => {
      console.log(this.userInfo);
      console.log('account page');
    });
  }
}
