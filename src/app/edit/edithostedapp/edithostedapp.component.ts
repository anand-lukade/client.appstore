
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {  EditappdetailService } from '../../services/editappdetail.service';

@Component({
  selector: 'app-edithostedapp',
  templateUrl: './edithostedapp.component.html',
  styleUrls: ['./edithostedapp.component.css']
})
export class EdithostedappComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr=[];
  hostedAppObj={};
  // this.hostedAppObj.CategoryId;Title;Description;Version;IphonePackageName;IpadPackageName;
  // Title=null;
  Icon=null;
  AndriodSmartPhoneBuild=null;
  AndriodTabletBuild=null;
  IphoneBuild=null;
  IpadBuild=null;
  ScreenShots=null;
  Documents=null;
  // categoryIds=5;

  showMessage=false;
  hostedAppTab=true;
  hostedId='';

  CategoryId=null;
    Title=null;
    Description=null;
    Version=null;
    IphonePackageName=null;
    IpadPackageName=null;

  constructor(private route:ActivatedRoute, private fb: FormBuilder, private editappdetailService: EditappdetailService , private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  ngOnInit() {
   this.hostedId=this.route.snapshot.params['Id'];
   this.getAppCategory();

    this.getHostedAppDetails(this.hostedId);
  }
  getHostedAppDetails(Id:string){   
      this.editappdetailService.getHostedAppDetails(Id).subscribe(res=>{
        console.log("data update: "+ res);
        this.hostedAppObj=res;
        // this.showMessage=true;
      })
  }

  getAppCategory(){   
  
      this.fileUploadService.getCategory().subscribe(res=>
        // console.log(res));
      this.categoryArr=res
      )
  
    }
    urlString=[];
    splitUrlString(data:string){      
      
      this.urlString = data.split('UploadBuckets/');
      console.log(this.urlString);
      return this.urlString[1];
  
    }
  getCategoryId(category){
    this.CategoryId=+category.value;
    console.log(this.CategoryId);
  }

  // Event calls for - files

  onIcon(event) {
    console.log(event);
    this.Icon = event.target.files[0];     
  }

  onAndriodSmartPhoneBuild(event) {
    console.log(event);
    this.AndriodSmartPhoneBuild = event.target.files[0];     
  }

  onAndriodTabletBuild(event) {
    console.log(event);
    this.AndriodTabletBuild = event.target.files[0];     
  }

  onIphoneBuild(event) {
    console.log(event);
    this.IphoneBuild = event.target.files[0];     
  }

  onIpadBuild(event) {
    console.log(event);
    this.IpadBuild = event.target.files[0];     
  }

  onScreenShots(event) {
    console.log(event);
    this.ScreenShots = event.target.files;     
  }

  onDocuments(event) {
    console.log(event);
    this.Documents = event.target.files;     
  }
  //End of  Event calling in different files
  


  //onSbmit function starts


  onSubmit(CategoryId,Title,Description,Version,IphonePackageName,IpadPackageName) {
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

    if (this.ScreenShots != null) {
      for (let i = 0; i < this.ScreenShots.length; i++) {
        formData.append('ScreenShots', this.ScreenShots[i], this.ScreenShots[i].name);
      }
    }
    
  
    formData.append('Icon', this.Icon,this.Icon.name);
    formData.append('AndriodSmartPhoneBuild', this.AndriodSmartPhoneBuild,this.AndriodSmartPhoneBuild.name);
    formData.append('AndriodTabletBuild', this.AndriodTabletBuild,this.AndriodTabletBuild.name);
    formData.append('IphoneBuild', this.IphoneBuild,this.IphoneBuild.name);
    formData.append('IpadBuild', this.IpadBuild,this.IpadBuild.name);
    // formData.append('ScreenShots', this.ScreenShots,this.ScreenShots.name);
    // formData.append('Documents', this.Documents,this.Documents.name);


    formData.append('CategoryId', this.CategoryId);
    formData.append('Title',  this.Title);
    formData.append('Description',  this.Description);
    formData.append('Version',  this.Version);
    formData.append('IphonePackageName',  this.IphonePackageName);
    formData.append('IpadPackageName',  this.IpadPackageName);
    formData.append('Id', this.hostedId);


    
    formData.append('published', 'true');


    
    

    console.log(formData);
    // formData=this.userdata;

    this.fileUploadService.upload(formData).subscribe(res=>{
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


    
  }

  //onSbmit function ends


  //backToHome function starts

  backToHome(){
      this.router.navigate(['/'])
  }

    //backToHome function ends



}