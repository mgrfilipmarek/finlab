import { Component, OnInit } from '@angular/core';
import {User} from "../data/user";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMenu: string = '';
  loggedUser: User;

  constructor() { }

  ngOnInit() {
    this.loggedUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

}
