import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';
import { ShowingService } from 'src/app/services/showing/showing.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  showings: any
  constructor(private showingService: ShowingService, private filmService: FilmService, private router: Router) {}
  ionViewDidEnter(){
    this.showingService.getAllShowings().subscribe(res=>{
      this.showings=res;
    });
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }
  goToFilmInfoByTitle(title:string){
    this.filmService.getFilmByTitle(title);
  }

}
