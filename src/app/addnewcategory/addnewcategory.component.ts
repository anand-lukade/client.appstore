import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload-service.service';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addnewcategory',
  templateUrl: './addnewcategory.component.html',
  styleUrls: ['./addnewcategory.component.css']
})
export class AddnewcategoryComponent implements OnInit {

  
  showMessage=false;
  Category='';


  

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService,private http: HttpClient,private router :Router) { }

  ngOnInit() {
    // this.profileForm = this.fb.group({
    //   name: [''],
    //   profile: ['']
    // });
  }

  
  

 


  //onSbmit function starts


  onSubmit(Category) {
    const formData = new FormData();  

    // console.log(CategoryId.value);
    // console.log(Title.value);
    // console.log(Description.value);
    // console.log(Version.value);
    // console.log(IphonePackageName.value);
    // console.log(IpadPackageName.value);
   this.Category=Category.value;
   
    
  
   
    // formData.append('Documents', this.Documents,this.Documents.name);


    // formData.append('Title', Title.value);
    // formData.append('Description', Description.value);

    
    // formData.append('published', 'true');


    
    


    /////
    this.fileUploadService.addNewCategory(this.Category).subscribe(res=>{
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