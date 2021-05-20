import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from 'src/app/services/film/film.service';
import { ShowingService } from 'src/app/services/showing/showing.service';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss'],
})
export class FilmItemComponent implements OnInit{
  @Input() showing: any={};
  film: any={};
  
  constructor(private filmService: FilmService, private showingService: ShowingService, private router: Router) { 
  }
  
  ionViewDidEnter(){
    this.film = this.getFilmWithShowing(this.showing);
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }

  getFilmWithShowing(showing: any){
    return this.filmService.getFilmById(showing.fid);
  }
  
  goToFilmPage(fid:number){
    this.router.navigate(['film',fid]);
  }

}
