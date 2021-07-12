import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  user: User;
  callbackFunction : () => void;

  constructor(
    private userService: UserService){
      this.user = {
        userName: '',
        email: '',
        password: '',
        secPassword: '',
        userType: '',
      }
   }

  ngOnInit(): void {
  }

  onSave(){
  this.userService.createUser(this.user).subscribe(respone => {
    console.log("user was created: ", this.user);
    this.setDefaultValue();
  })
  }

  setDefaultValue(){
    this.user = {
      userName: '',
      email: '',
      password: '',
      secPassword: '',
      userType: '',
    }  
  }
  
}
