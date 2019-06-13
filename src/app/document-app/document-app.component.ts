
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-app',
  templateUrl: './document-app.component.html',
  styleUrls: ['./document-app.component.css']
})
export class DocumentAppComponent implements OnInit {

  profileForm: FormGroup;

  categoryArr = [1, 2, 3, 4];

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


  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService, private http: HttpClient, private router: Router) { }

  ngOnInit() {   
  }




  getCategoryId(category) {
    this.categoryId = +category.value + 1;
    console.log(this.categoryId);
  }


  onDocuments(event) {
    console.log(event);
    this.Documents = event.target.files;
  }

  onSubmit(Title, Description) {
    const formData = new FormData();
    if (this.Documents != null) {
      for (let i = 0; i < this.Documents.length; i++) {
        formData.append('Documents', this.Documents[i], this.Documents[i].name);
      }
    }
    formData.append('Title', Title.value);
    formData.append('Description', Description.value);

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