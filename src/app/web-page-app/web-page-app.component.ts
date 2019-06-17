import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import {  DashboardService } from '../services/dashboardCall.service';
@Component({
  selector: 'app-web-page-app',
  templateUrl: './web-page-app.component.html',
  styleUrls: ['./web-page-app.component.css']
})
export class WebPageAppComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr=[];

  Icon=null;
  AndriodSmartPhoneBuild=null;
  AndriodTabletBuild=null;
  IphoneBuild=null;
  IpadBuild=null;
  webPageUrl=null;
  Documents=null;
  categoryId=null;
  showMessage=false;
  webAppTab=true;
  documentAppTab=false;
  hostedAppTab=false;  
  thirtPartyAppTab=false;
  User='';
  firstName='';
  lastname='';

  constructor(private dashboardService : DashboardService,private fb: FormBuilder, private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  ngOnInit() {
    // this.profileForm = this.fb.group({
    //   name: [''],
    //   profile: ['']
    // });
    this.User=JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.User);
    this.firstName=this.User['Firstname'];
    this.lastname=this.User['Lastname'];


    this.dashboardService.setUserdetails(this.firstName+ ' ' + this.lastname);
  }

  
  

  getCategoryId(category){
    this.categoryId=+category.value+1;
    console.log(this.categoryId);
  }

  // Event calls for - files


  onDocuments(event) {
    console.log(event);
    this.Documents = event.target.files;     
  }
  //End of  Event calling in different files
  


  //onSbmit function starts

  errorMessage=false;

  onSubmit(Title,Description,webPageUrl) {

    if(Title.value!="" && Description.value!="" && webPageUrl.value!=""){

    const formData = new FormData();  

    // console.log(CategoryId.value);
    // console.log(Title.value);
    // console.log(Description.value);
    // console.log(Version.value);
    // console.log(IphonePackageName.value);
    // console.log(IpadPackageName.value);
   
   
    if (this.Documents != null) {
      for (let i = 0; i < this.Documents.length; i++) {
        formData.append('Documents', this.Documents[i], this.Documents[i].name);
      }
    }
  
   
    // formData.append('Documents', this.Documents,this.Documents.name);


    formData.append('Title', Title.value);
    formData.append('Description', Description.value);
    formData.append('webPageUrl', webPageUrl.value);

    
    // formData.append('published', 'true');


    
    


    /////
    this.fileUploadService.uploadWebApp(formData).subscribe(res=>{
      console.log("data update: "+ res);
      this.showMessage=true;

      // title=null;
      // description=null;
      // version=null;
      // iphonepackage=null;
      // ipadpackage=null;
      // this.AppIconUploadFile=null;
      // this.androidbuildUploadFile=null;
    }
    
    );
    ///////
  }
  this.errorMessage=true;



    
  }

  //onSbmit function ends


  //backToHome function starts

  backToHome(){
      this.router.navigate(['/'])
  }

    //backToHome function ends



}