import { Injectable } from '@angular/core';
import {films} from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor() { }
  film: any;
  getFilmById(fid: number){
    this.film = films.filter(res=>res.id === fid)[0];
    return this.film;
  }

  getAllFilms(){
    return films;
  }
}
