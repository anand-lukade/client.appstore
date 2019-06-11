import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  DashboardService } from '../services/dashboardCall.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hostedAppData=[];
  mynames1=[];
  showtab1=false;
  showtab2=false;
  showtab3=false;
  showtab4=false;



  constructor(private router :Router,private dashboardService : DashboardService) { }
User='';
firstName='';
lastname='';
  ngOnInit() {
    this.loadHostedApps();

    this.User=JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.User);

    this.firstName=this.User['Firstname'];
    this.lastname=this.User['Lastname'];
console.log(this.firstName);
console.log(this.lastname);
  }

  addResources(){
this.router.navigate(['/hostedapp']);
  }
  loadWebpage(){}
  loadDocuments(){}
  loadHostedApps(){
    // this.mynames=[1,2,3,4,5];

    this.showtab2=false;
    this.showtab1=true;

    this.dashboardService.getHostedApp().subscribe(res=>
      // console.log(res));
      this.hostedAppData=res)
  }
  loadThirdPartyApps(){
    this.mynames1=[1,2,3,4,5,6,7,8,9,10];

    this.showtab1=false;
    this.showtab2=true;


  }

}
