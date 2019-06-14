import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {  EditappdetailService } from '../../services/editappdetail.service';

@Component({
  selector: 'app-editthirdpartyapp',
  templateUrl: './editthirdpartyapp.component.html',
  styleUrls: ['./editthirdpartyapp.component.css']
})
export class EditthirdpartyappComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr=[];

  Icon=null;
  AndriodSmartPhoneBuild=null;
  AndriodTabletBuild=null;
  IphoneBuild=null;
  IpadBuild=null;
  thirdPartyAppUrl=null;
  Documents=null;
  categoryId=null;
  showMessage=false;
  thirtPartyAppTab=true;
  webAppTab=false;
  documentAppTab=false;
  hostedAppTab=false;  

  thirdpartyId='';

  thirdpartyAppObj={
    CategoryId:null,
    Title:null,
    Description:null,
    Version:null,
    IphonePackageName:null,
    IpadPackageName:null,
    Icon:null,
    AndriodSmartPhoneBuild:null,
    AndriodTabletBuild:null,
    IphoneBuild:null,
    IpadBuild:null,
    ScreenShots:null,
    Documents:null,
    ThirdPartyAppUrl:null
};

  constructor(private route: ActivatedRoute, private editappdetailService: EditappdetailService, private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  
  ngOnInit() {
    this.thirdpartyId=this.route.snapshot.params['Id'];
    this.getAppCategory();
 
     this.getThirtPartyAppDetails(this.thirdpartyId);
   }
   getThirtPartyAppDetails(Id:string){   
       this.editappdetailService.getThirdPartyAppDetails(Id).subscribe(res=>{
         console.log("data update: "+ res);
         this.thirdpartyAppObj=res;
         // this.showMessage=true;
       })
   }
   getAppCategory(){   
  
    this.fileUploadService.getCategory().subscribe(res=>
      // console.log(res));
    this.categoryArr=res
    )

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
  urlString=[];
    splitUrlString(data:string){      
      
      this.urlString = data.split('UploadBuckets/');
      console.log(this.urlString[1]);
      return this.urlString[1];
  
    }


  //onSbmit function starts


  onSubmit() {
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


    formData.append('CategoryId', this.thirdpartyAppObj.CategoryId);
    formData.append('Title', this.thirdpartyAppObj.Title);
    formData.append('Description', this.thirdpartyAppObj.Description);
    formData.append('Version', this.thirdpartyAppObj.Version);
    formData.append('thirdPartyAppUrl', this.thirdpartyAppObj.ThirdPartyAppUrl);
    formData.append('Id', this.thirdpartyId);

    
    // formData.append('published', 'true');


    
    


    /////
    this.fileUploadService.uploadThirdPartyApp(formData).subscribe(res=>{
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

  //onSbmit function ends


  //backToHome function starts

  backToHome(){
      this.router.navigate(['/'])
  }

    //backToHome function ends



}