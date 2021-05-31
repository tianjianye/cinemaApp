import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';
import { ShowingService } from 'src/app/services/showing/showing.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {
  id: number;
  film: any={};
  showings: any=[];
  constructor(private filmService: FilmService, private showingService: ShowingService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.film = this.filmService.getFilmById(this.id);
    const allShowings = this.showingService.getAllShowings();
    this.showings = allShowings.filter((res)=>res.fid === this.id);
  }
}