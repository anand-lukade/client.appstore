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
    onPublishModel:any={
      hostedpublish:'',
      thirdpartypublish:'',
      webpublish:'',
      documentpublish:''



    }
    userFilter: any = { Title: ''};
    // userFilters: any = { Title: '',Published : this.onPublishModel.hostedpublish};
    // userFilters: any = { Title: '',Published : this.onPublishModel.hostedpublish};

    // userFilters: any = { $or: [' Title: ""', 'Published : this.onPublishModel.hostedpublish'] }

    onPublishSelected(name){
      if(name=="HostedApp"){
        if(this.onPublishModel.hostedpublish==false){
          console.log(this.onPublishModel.hostedpublish);
        
          this.loadHostedApps();

        }
        if(this.onPublishModel.hostedpublish==true){
          console.log(this.onPublishModel.hostedpublish);
     
          this.hostedAppDataArr= this.hostedAppDataArr.filter(function (data) {
            return data.Published === true;
          });

        }
      }
      else if (name=="ThirdPartyApp"){
        if(this.onPublishModel.thirdpartypublish==false){
          console.log(this.onPublishModel.thirdpartypublish);
        
          this.loadThirdPartyApps();

        }
        if(this.onPublishModel.thirdpartypublish==true){
          console.log(this.onPublishModel.thirdpartypublish);
     
          this.thirdPartyAppDataArr= this.thirdPartyAppDataArr.filter(function (data) {
            return data.Published === true;
          });

        }
      }
      else if (name=="WebApp"){
        if(this.onPublishModel.webpublish==false){
          console.log(this.onPublishModel.webpublish);
        
          this.loadWebpage();

        }
        if(this.onPublishModel.webpublish==true){
          console.log(this.onPublishModel.webpublish);
     
          this.webAppDataArr= this.webAppDataArr.filter(function (data) {
            return data.Published === true;
          });

        }
      }
      else if (name=="DocumentApp"){
        if(this.onPublishModel.documentpublish==false){
          console.log(this.onPublishModel.documentpublish);
        
          this.loadDocuments();

        }
        if(this.onPublishModel.documentpublish==true){
          console.log(this.onPublishModel.documentpublish);
     
          this.documentAppDataArr= this.documentAppDataArr.filter(function (data) {
            return data.Published === true;
          });

        }
      }
       

    }

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
      this.hostedAppDataArr= res
      
      
      )
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
