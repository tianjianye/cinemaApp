import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.page.html',
  styleUrls: ['./film-info.page.scss'],
})
export class FilmInfoPage implements OnInit {
  filmInfo: any;
  constructor(private filmService: FilmService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ionViewDidEnter(){
    this.filmInfo = JSON.parse(this.filmService.getCurrentFilm());
  }
  ionViewDidLeave() {
    this.filmService.removeCurrentFilm();
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }
  sortNull(){}
}