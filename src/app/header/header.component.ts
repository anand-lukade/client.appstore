import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {  AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // isuserLogedIn: Observable<boolean>; 
  isuserLogedIn=false;
  firstName='';
  lastname='';
  User='';
  constructor(private authentication:AuthenticationService) { }
// isuserLogedIn=false;
  ngOnInit() {
   
    // if (localStorage.getItem('currentUser')) {
    //   // logged in so return true
    //   this.isuserLogedIn= true;
// console.log("3 :"+ this.isuserLogedIn);
       
      this.authentication.isLoggedIn.subscribe(res=>
        this.isuserLogedIn=res ); // {2}
  // }
    
  }
  

}
