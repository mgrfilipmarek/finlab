import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';

@Component({
  selector: 'userDetail',
  templateUrl: './userDetail.component.html',
  styleUrls: ['./userDetail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User = {
    userName: 'Filip',
    email: 'a@a.com',
    password: 'asdf'
  };

  constructor() { }

  ngOnInit() {

  }

}
