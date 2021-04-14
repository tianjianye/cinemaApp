import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router} from '@angular/router';
import { User } from 'src/app/interface/user';

const URL_USERS = './assets/data/users.json';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  result: any;
  constructor(private httpClient: HttpClient, private router: Router) {}

  signUp(name: string, password: string){
    let user = <User>{};
    user.name = name;
    user.password = password;
    console.log(user);
    this.result = user;
    this.setUser();
    this.router.navigateByUrl('home').then();
  }
  
  setUser(){
    window.sessionStorage.setItem('currentUser',JSON.stringify(this.result));
  }

  login(name: string, password: string){
    this.httpClient.get<any[]>(URL_USERS).pipe().subscribe(res=>{
      this.result = res.filter(c => c.name === name).filter(c => c.password === password)[0];
      if (this.result !== null && this.result !== undefined){
        this.setUser();
        this.router.navigateByUrl('home').then();
      } else{
      alert('Invalid name or password: Please try again');
        window.sessionStorage.clear();
      }
    });

  }
}
