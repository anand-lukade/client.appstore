
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import {  EditappdetailService } from '../../services/editappdetail.service';


@Component({
  selector: 'app-editwebpageapp',
  templateUrl: './editwebpageapp.component.html',
  styleUrls: ['./editwebpageapp.component.css']
})
export class EditwebpageappComponent implements OnInit {

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

  webpageAppId='';

  webPageAppObj={
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


  constructor(private route: ActivatedRoute, private editappdetailService: EditappdetailService, private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  
  
  ngOnInit() {
    this.webpageAppId=this.route.snapshot.params['Id'];
    this.getAppCategory();
 
     this.getWebPageAppDetails(this.webpageAppId);
   }
   getWebPageAppDetails(Id:string){   
       this.editappdetailService.getWebPageAppDetails(Id).subscribe(res=>{
         console.log("data update: "+ res);
         this.webPageAppObj=res;
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


    formData.append('Title', this.webPageAppObj.Title);
    formData.append('Description', this.webPageAppObj.Description);
    formData.append('ThirdPartyAppUrl', this.webPageAppObj.WebPageUrl);
    formData.append('Id', this.webpageAppId);

    
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

  //onSbmit function ends


  //backToHome function starts

  backToHome(){
      this.router.navigate(['/'])
  }

    //backToHome function ends



}