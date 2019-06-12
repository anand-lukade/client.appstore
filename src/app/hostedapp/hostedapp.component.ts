import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostedapp',
  templateUrl: './hostedapp.component.html',
  styleUrls: ['./hostedapp.component.css']
})
export class HostedappComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr=[];

  Icon=null;
  AndriodSmartPhoneBuild=null;
  AndriodTabletBuild=null;
  IphoneBuild=null;
  IpadBuild=null;
  ScreenShots=null;
  Documents=null;
  categoryId=null;
  showMessage=false;

  

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  ngOnInit() {
    // this.profileForm = this.fb.group({
    //   name: [''],
    //   profile: ['']
    // });
    this.getAppCategory();
  }

  
  

  getAppCategory(){   
  
      this.fileUploadService.getCategory().subscribe(res=>
        // console.log(res));
      this.categoryArr=res
      )
  
    }

  getCategoryId(category){
    this.categoryId=+category.value;
    console.log(this.categoryId);
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
    this.ScreenShots = event.target.files[0];     
  }

  onDocuments(event) {
    console.log(event);
    this.Documents = event.target.files[0];     
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
   
   
    
  
    formData.append('Icon', this.Icon,this.Icon.name);
    formData.append('AndriodSmartPhoneBuild', this.AndriodSmartPhoneBuild,this.AndriodSmartPhoneBuild.name);
    formData.append('AndriodTabletBuild', this.AndriodTabletBuild,this.AndriodTabletBuild.name);
    formData.append('IphoneBuild', this.IphoneBuild,this.IphoneBuild.name);
    formData.append('IpadBuild', this.IpadBuild,this.IpadBuild.name);
    formData.append('ScreenShots', this.ScreenShots,this.ScreenShots.name);
    formData.append('Documents', this.Documents,this.Documents.name);


    formData.append('CategoryId', CategoryId.value);
    formData.append('Title', Title.value);
    formData.append('Description', Description.value);
    formData.append('Version', Version.value);
    formData.append('IphonePackageName', IphonePackageName.value);
    formData.append('IpadPackageName', IpadPackageName.value);

    
    formData.append('published', 'true');


    
    

    console.log(formData);
    // formData=this.userdata;

    /////
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
    ///////


    
  }

  //onSbmit function ends


  //backToHome function starts

  backToHome(){
      this.router.navigate(['/'])
  }

    //backToHome function ends



}