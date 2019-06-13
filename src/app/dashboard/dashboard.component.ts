import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  DashboardService } from '../services/dashboardCall.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  hostedAppDataArr=[];
  thirdPartyAppDataArr=[];
  webAppDataArr=[];
  documentAppDataArr=[];


  hostedAppTab=false;
  thirtPartyAppTab=false;
  webAppTab=false;
  documentAppTab=false;

  constructor(private router :Router,private dashboardService : DashboardService) { }
    User='';
    firstName='';
    lastname='';
    p: number = 1;
    userFilter: any = { Title: '' };

  ngOnInit() {

    this.loadHostedApps();
    this.User=JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.User);
    this.firstName=this.User['Firstname'];
    this.lastname=this.User['Lastname'];


    this.dashboardService.setUserdetails(this.firstName+ ' ' + this.lastname);


    // console.log(this.firstName);
    // console.log(this.lastname);

  }

  addResources(){
    this.router.navigate(['/hostedapp']);
  }
  loadWebpage(){
    

  this.hostedAppTab=false;
  this.thirtPartyAppTab=false;
  this.webAppTab=true;
  this.documentAppTab=false;

    this.dashboardService.getWebApp().subscribe(res=>
      // console.log(res));
    this.webAppDataArr=res
    )

  }
  loadDocuments(){
    this.hostedAppTab=false;
    this.thirtPartyAppTab=false;
    this.webAppTab=false;
    this.documentAppTab=true;

    this.dashboardService.getDocumentApp().subscribe(res=>
      // console.log(res));
    this.documentAppDataArr=res
    )
  }

  loadHostedApps(){   

  this.hostedAppTab=true;
  this.thirtPartyAppTab=false;
  this.webAppTab=false;
  this.documentAppTab=false;

    this.dashboardService.getHostedApp().subscribe(res=>
      // console.log(res));
      this.hostedAppDataArr=res)
  }

  loadThirdPartyApps(){

  this.hostedAppTab=false;
  this.thirtPartyAppTab=true;
  this.webAppTab=false;
  this.documentAppTab=false;

    this.dashboardService.getThirdPartyApp().subscribe(res=>
      // console.log(res));
    this.thirdPartyAppDataArr=res
    )
    

  }

}
