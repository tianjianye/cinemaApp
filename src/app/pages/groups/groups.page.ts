import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/services/group/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: 'groups.page.html',
  styleUrls: ['groups.page.scss']
})
export class GroupsPage {
  groups: any;
  constructor(private groupService: GroupService, private router: Router) {}
  ionViewDidEnter(){
    this.groups = this.groupService.getAllGroups();
  }
  ngOnInit() {
    this.ionViewDidEnter();
  }
  goToGroupPage(id: number){
    this.router.navigate(['group',id]);
  }
}
