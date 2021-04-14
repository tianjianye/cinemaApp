import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.page.html',
  styleUrls: ['./account-update.page.scss'],
})
export class AccountUpdatePage implements OnInit {
  parameter: string;
  value: any;
  userInfo: any;
  constructor(private activatedRoute: ActivatedRoute) { }
  ionViewDidEnter(){
    this.userInfo = JSON.parse(window.sessionStorage.getItem('currentUser'));
    this.activatedRoute.queryParams.subscribe(params => {
      this.parameter = params.option;
      if(this.userInfo !== undefined){
        this.value = this.userInfo[this.parameter];
      }
    });
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }

}
