import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const URL_SHOWINGS = './assets/data/showings.json';

@Injectable({
  providedIn: 'root'
})
export class ShowingService {

  constructor(private httpClient: HttpClient, private router: Router) { }
  getAllShowings() {
    return this.httpClient.get<any[]>(URL_SHOWINGS).pipe();
  }
}
