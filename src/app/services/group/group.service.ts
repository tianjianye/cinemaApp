import { Injectable } from '@angular/core';
import {groups} from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor() { }
  
  getAllGroups(){
    return groups;
  }
  getGroupById(gid:number){
    return groups.filter(g=>g.id===gid)[0];
  }
}
