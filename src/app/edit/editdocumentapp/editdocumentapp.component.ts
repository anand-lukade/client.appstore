import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../file-upload-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {  EditappdetailService } from '../../services/editappdetail.service';


@Component({
  selector: 'app-editdocumentapp',
  templateUrl: './editdocumentapp.component.html',
  styleUrls: ['./editdocumentapp.component.css']
})
export class EditdocumentappComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr = [];

  Icon = null;
  AndriodSmartPhoneBuild = null;
  AndriodTabletBuild = null;
  IphoneBuild = null;
  IpadBuild = null;
  webPageUrl = null;
  Documents = null;
  categoryId = null;
  showMessage = false;
  
  documentAppTab=true;
  hostedAppTab=false;  
  thirtPartyAppTab=false;
  webAppTab=false;

  documentAppId='';

  documentAppObj={
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
    ThirdPartyAppUrl:null,
    WebPageUrl:null
};


  constructor(private route: ActivatedRoute, private editappdetailService: EditappdetailService,private fb: FormBuilder, private fileUploadService: FileUploadService, private http: HttpClient, private router: Router) { }

  
  ngOnInit() {
    this.documentAppId=this.route.snapshot.params['Id'];
    this.getAppCategory();
 
     this.getdocumentAppDetails(this.documentAppId);
   }
   getdocumentAppDetails(Id:string){   
       this.editappdetailService.getdocumentAppDetails(Id).subscribe(res=>{
         console.log("data update: "+ res);
         this.documentAppObj=res;
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

  onSubmit(Title, Description) {
    const formData = new FormData();
    if (this.Documents != null) {
      for (let i = 0; i < this.Documents.length; i++) {
        formData.append('Documents', this.Documents[i], this.Documents[i].name);
      }
    }
    formData.append('Title', this.documentAppObj.Title);
    formData.append('Description', this.documentAppObj.Description);

    formData.append('Id', this.documentAppId);


    this.fileUploadService.uploadDocumentApp(formData).subscribe(res => {
      console.log("data update: " + res);
      this.showMessage = true;
    }

    );
  }
  backToHome() {
    this.router.navigate(['/'])
  }
}