import { Injectable } from '@angular/core';
import {films} from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor() { }
  film: any;
  // setCurrentFilm(film: any){
  //   window.sessionStorage.setItem('currentFilm', JSON.stringify(film));
  // }
  // getCurrentFilm(){
  //   return window.sessionStorage.getItem('currentFilm');
  // }
  // removeCurrentFilm(){
  //   window.sessionStorage.removeItem('currentFilm');
  // }
  getFilmById(fid: number){
    this.film = films.filter(res=>res.id === fid)[0];
    // this.setCurrentFilm(this.film);
    return this.film;
  }

}
