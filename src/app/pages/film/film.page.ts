import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  id: number;
  film: any={};
  constructor(private filmService: FilmService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.film = this.filmService.getFilmById(this.id);
  }
}