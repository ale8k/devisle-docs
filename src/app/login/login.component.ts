import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit 
{
  private usersInput : string;

  constructor(private router: Router) { }

  ngOnInit() 
  {
  }

  private logUsersInput(event : any)
  {
    this.usersInput = event.target.value;
  }
  
  private attemptToRouteUser(event : any) 
  {
    this.router.navigateByUrl('home');
  }

}
