import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss'],
})
export class GroupItemComponent implements OnInit {
  @Input() group: any={};
  constructor(private router: Router) { }
  ngOnInit() {
  }
  goToGroupPage(id: number){
    this.router.navigate(['group',id]);
  }

}
