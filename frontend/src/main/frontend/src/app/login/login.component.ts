import { Component, OnInit } from '@angular/core';
import {User} from "../data/user";
import { FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Account} from "../data/account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loginForm: FormGroup;
  loggedUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    /*this.loginForm = new FormGroup({
      'name': new FormControl(this.model.userName, [
        Validators.required,
        Validators.minLength(4),
        // forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ])
    });*/
  }

  login(): void {
    console.log("login perform ");
    this.userService.getUserDetail(this.model.userName)
      .subscribe((data: User) => {
        this.loggedUser = data;
        localStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
        // console.log(this.model.password);
        // console.log(this.loggedUser.password);
        /*if (this.loggedUser.password === this.model.password) {
          console.log("success")
        } else {
          console.log("bad input");
        }*/
    });
  }

  /*get name() {
    return this.loginForm.get('name');
  }*/

}
