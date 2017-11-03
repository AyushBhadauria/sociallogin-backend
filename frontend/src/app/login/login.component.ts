import { Component, OnInit } from '@angular/core';
import {SocialService} from './../services/socialservice.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private socialService:SocialService,private router: Router) { }

  ngOnInit() {
  }
  fblogin(){
    this.socialService.fbLogin().subscribe(() => {
      console.log('User has been logged in');
      this.router.navigate(['/profile']);
    });
  }


}
