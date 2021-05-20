import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/services/group/group.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.page.html',
  styleUrls: ['./group.page.scss'],
})
export class GroupPage implements OnInit {
  id: number;
  group: any={};
  members: any[]=[];
  events: any[]=[];
  constructor(private groupService: GroupService, private userService: UserService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id']);
    this.group = this.groupService.getGroupById(this.id);
    this.group.members.forEach(element => {
      this.members.push(this.userService.getUserById(element.id));
    });
  }
}
