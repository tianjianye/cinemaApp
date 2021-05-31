import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import {users} from '../../../assets/data';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  signUp(name: string, password: string){
    let result = {'name':name,'password':password};
    this.setUser(result);
    this.router.navigateByUrl('tabs/home').then();
  }
  
  setUser(user:any){
    window.sessionStorage.setItem('currentUser',JSON.stringify(user));
  }
  getUserById(id:number){
    return users.filter(res=>res.id===id)[0];
  }

  login(name: string, password: string){
    let user = users.filter(res=>res.name === name).filter(res=>res.password === password)[0];
    if(user){
      this.setUser(user);
      this.router.navigateByUrl('tabs/home').then();
    }
    else{
      alert('Invalid name or password: Please try again!');
      window.sessionStorage.clear();
    }
  }
}
