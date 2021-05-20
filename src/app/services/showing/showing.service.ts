import { Injectable } from '@angular/core';
import {showings} from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})

export class ShowingService {
  constructor() { }
  showing: any;
  getShowingById(sid: number){
    this.showing = showings.filter(res=>res.id === sid)[0];
    return this.showing;
  }
  getAllShowings(){
    return showings;
  }
}
