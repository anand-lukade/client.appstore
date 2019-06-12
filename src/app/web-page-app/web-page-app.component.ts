import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web-page-app',
  templateUrl: './web-page-app.component.html',
  styleUrls: ['./web-page-app.component.css']
})
export class WebPageAppComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr=[1,2,3,4];

  Icon=null;
  AndriodSmartPhoneBuild=null;
  AndriodTabletBuild=null;
  IphoneBuild=null;
  IpadBuild=null;
  webPageUrl=null;
  Documents=null;
  categoryId=null;
  showMessage=false;

  

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  ngOnInit() {
    // this.profileForm = this.fb.group({
    //   name: [''],
    //   profile: ['']
    // });
  }

  
  

  getCategoryId(category){
    this.categoryId=+category.value+1;
    console.log(this.categoryId);
  }

  // Event calls for - files


  onDocuments(event) {
    console.log(event);
    this.Documents = event.target.files[0];     
  }
  //End of  Event calling in different files
  


  //onSbmit function starts


  onSubmit(Title,Description,webPageUrl) {
    const formData = new FormData();  

    // console.log(CategoryId.value);
    // console.log(Title.value);
    // console.log(Description.value);
    // console.log(Version.value);
    // console.log(IphonePackageName.value);
    // console.log(IpadPackageName.value);
   
   
    
  
   
    formData.append('Documents', this.Documents,this.Documents.name);


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

  //onSbmit function ends


  //backToHome function starts

  backToHome(){
      this.router.navigate(['/'])
  }

    //backToHome function ends



}