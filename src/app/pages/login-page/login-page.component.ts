import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user: User;

  constructor(
    private userService: UserService,
    private router: Router
  ) {this.user= {
    userName: '',
    email: '',
    password: '',
    secPassword: '',
    userType: '',
  }
}

  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.logInUser(this.user.email).subscribe(response => {
      console.log("the following user is logged", this.user.email)      
    })
  }

}
