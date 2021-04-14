import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const URL_FILMS = './assets/data/films.json';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  film: any
  constructor(private httpClient: HttpClient, private router: Router) { }
  setFilm(film: any){
    window.sessionStorage.setItem('currentFilm', JSON.stringify(film));
  }
  getCurrentFilm(){
    return window.sessionStorage.getItem('currentFilm');
  }
  removeCurrentFilm(){
    window.sessionStorage.removeItem('currentFilm');
  }
  getFilmByTitle(title: string){
    this.httpClient.get<any[]>(URL_FILMS).pipe().subscribe(res=>{
      this.film = res.filter(c=>c.title === title)[0];
      this.setFilm(this.film);
      this.router.navigateByUrl('film-info').then();
    });
  }

}
