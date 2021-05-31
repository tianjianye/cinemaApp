import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  results: any=[];
  films: any;
  constructor(private filmService: FilmService, private router: Router) {}
  ionViewDidEnter(){
    this.films = this.filmService.getAllFilms();
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }
  search(event:any){
    const query = event.target.value.toLowerCase();
    this.results=[];
    this.films = this.filmService.getAllFilms();
    if(query!==""){
      this.films.forEach(item => {
        const film = this.filmService.getFilmById(item.id)
        const shouldShow = film.title.toLowerCase().indexOf(query);
        if(shouldShow>-1){
          this.results.push(item);
        }
      });
      this.films = this.results;
    }
  }
  goToFilmPage(id: number){
    this.router.navigate(['film',id]);
  }
}
