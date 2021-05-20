import { Component, ViewChild } from '@angular/core';
import { ShowingService } from 'src/app/services/showing/showing.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  showings: any;
  constructor(private showingService: ShowingService) {}
  ionViewDidEnter(){
    this.showings = this.showingService.getAllShowings();
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }
}
