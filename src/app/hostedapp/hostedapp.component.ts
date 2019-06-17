import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboardCall.service';

@Component({
  selector: 'app-hostedapp',
  templateUrl: './hostedapp.component.html',
  styleUrls: ['./hostedapp.component.css']
})
export class HostedappComponent implements OnInit {
  profileForm: FormGroup;
  categoryArr = [];
  Icon = null;
  AndriodSmartPhoneBuild = null;
  AndriodTabletBuild = null;
  IphoneBuild = null;
  IpadBuild = null;
  ScreenShots = null;
  Documents = null;
  categoryId = null;
  showMessage = false;
  hostedAppTab = true;
  thirtPartyAppTab = false;
  webAppTab = false;
  documentAppTab = false;
  User = '';
  firstName = '';
  lastname = '';

  constructor(private dashboardService: DashboardService, private fb: FormBuilder, private fileUploadService: FileUploadService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getAppCategory();
    this.User = JSON.parse(localStorage.getItem('currentUser'));
    this.firstName = this.User['Firstname'];
    this.lastname = this.User['Lastname'];
    this.dashboardService.setUserdetails(this.firstName + ' ' + this.lastname);
  }

  getAppCategory() {

    this.fileUploadService.getCategory().subscribe(res =>
      this.categoryArr = res
    )
  }

  getCategoryId(category) {
    this.categoryId = +category.value;
    console.log(this.categoryId);
  }  

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
  errorMessage=false;
  onSubmit(CategoryId, Title, Description, Version, IphonePackageName, IpadPackageName) {
    if(Title.value!="" && Description.value!="" && Version.value!="" ){


    
    
    const formData = new FormData();
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
    if (this.Icon != null) {
      formData.append('Icon', this.Icon, this.Icon.name);
    }
    if (this.AndriodSmartPhoneBuild != null) {
      formData.append('AndriodSmartPhoneBuild', this.AndriodSmartPhoneBuild, this.AndriodSmartPhoneBuild.name);
    }
    if (this.AndriodTabletBuild != null) {
      formData.append('AndriodTabletBuild', this.AndriodTabletBuild, this.AndriodTabletBuild.name);
    }
    if (this.IphoneBuild != null) {
      formData.append('IphoneBuild', this.IphoneBuild, this.IphoneBuild.name);
    }
    if (this.IpadBuild != null) {
      formData.append('IpadBuild', this.IpadBuild, this.IpadBuild.name);
    }
    formData.append('CategoryId', CategoryId.value);
    formData.append('Title', Title.value);
    formData.append('Description', Description.value);
    formData.append('Version', Version.value);
    formData.append('IphonePackageName', IphonePackageName.value);
    formData.append('IpadPackageName', IpadPackageName.value);
    formData.append('published', 'true');

    console.log(formData);

    this.fileUploadService.upload(formData).subscribe(res => {
      console.log("data update: " + res);
      this.showMessage = true;
    }
    );
  }
  this.errorMessage=true;

  }
  backToHome() {
    this.router.navigate(['/'])
  }
}