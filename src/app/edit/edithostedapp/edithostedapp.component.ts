
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../../file-upload-service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EditappdetailService } from '../../services/editappdetail.service';
import { DashboardService } from '../../services/dashboardCall.service';
@Component({
  selector: 'app-edithostedapp',
  templateUrl: './edithostedapp.component.html',
  styleUrls: ['./edithostedapp.component.css']
})
export class EdithostedappComponent implements OnInit {


  categoryArr = [];
  editCalled = false;
  formDetailsCalled = true;
  User = '';
  firstName = '';
  lastname = '';

  hostedAppObj = {
    CategoryId: null,
    Title: null,
    Description: null,
    Version: null,
    IphonePackageName: null,
    IpadPackageName: null,
    Icon: null,
    AndriodSmartPhoneBuild: null,
    AndriodTabletBuild: null,
    IphoneBuild: null,
    IpadBuild: null,
    ScreenShots: null,
    Documents: null,
    Rating:0
  };



  

  Icon = null;
  AndriodSmartPhoneBuild = null;
  AndriodTabletBuild = null;
  IphoneBuild = null;
  IpadBuild = null;
  ScreenShots = null;
  categoryId = null;

  Documents = null;
  // categoryIds=5;

  showMessage = false;
  hostedAppTab = true;
  hostedId = '';




  constructor(private dashboardService: DashboardService, private route: ActivatedRoute, private fb: FormBuilder, private editappdetailService: EditappdetailService, private fileUploadService: FileUploadService, private http: HttpClient, private router: Router) {
     }

  isadminFlag = false;

  ngOnInit() {
    this.hostedId = this.route.snapshot.params['Id'];
    this.getAppCategory();

    this.getHostedAppDetails(this.hostedId);

    this.User = JSON.parse(localStorage.getItem('currentUser'));
    this.firstName = this.User['Firstname'];
    this.lastname = this.User['Lastname'];
    this.isadminFlag = this.User['IsAdmin'];

    this.dashboardService.setUserdetails(this.firstName + ' ' + this.lastname);
  }


  
  editViewCalled() {
    this.editCalled = !this.editCalled;
    this.formDetailsCalled = !this.formDetailsCalled;
  }

  onNavigate(url) {
    
    window.open(url);
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }
  getHostedAppDetails(Id: string) {
    this.editappdetailService.getHostedAppDetails(Id).subscribe(res => {
      console.log("data update: " + res);
      this.hostedAppObj = res;
      // this.showMessage=true;
    })
  }

  getAppCategory() {

    this.fileUploadService.getCategory().subscribe(res =>
      // console.log(res));
      this.categoryArr = res
    )

  }


  urlString = [];
  splitUrlString(data: string) {

    this.urlString = data.split('UploadBuckets/');
    console.log(this.urlString);
    return this.urlString[1];

  }
  getCategoryId(category) {
    this.categoryId = +category.value;
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
    this.ScreenShots = event.target.files;
  }

  onDocuments(event) {
    console.log(event);
    this.Documents = event.target.files;
  }
  //End of  Event calling in different files



  //onSbmit function starts


  onSubmit() {
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
    // formData.append('ScreenShots', this.ScreenShots,this.ScreenShots.name);
    // formData.append('Documents', this.Documents,this.Documents.name);


    formData.append('CategoryId', this.hostedAppObj.CategoryId);
    formData.append('Title', this.hostedAppObj.Title);
    formData.append('Description', this.hostedAppObj.Description);
    formData.append('Version', this.hostedAppObj.Version);
    formData.append('IphonePackageName', this.hostedAppObj.IphonePackageName);
    formData.append('IpadPackageName', this.hostedAppObj.IpadPackageName);
    formData.append('Id', this.hostedId);



    formData.append('published', 'true');





    console.log(formData);
    // formData=this.userdata;

    this.fileUploadService.upload(formData).subscribe(res => {
      console.log("data update: " + res);
      this.showMessage = true;

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

  backToHome() {
    this.router.navigate(['/'])
  }

//review functionality
commentBox=false;

  unableComments(){
    this.commentBox=true;
  }
  appIdToUpdate=0;
  updateUserComments(comment,rating,appId){
    this.commentObj.Comment=comment;
    this.commentObj.rating=rating;
    this.appIdToUpdate=appId;
    this.commentBox=true;


  }

  commentObj = {
    Comment: null ,
    rating:null  
  };


  
  ratingArr=[1,2,3,4,5];
  errorMessageComment=false;
  Username='';
  // starRating = 3;
  onCommentSubmit() {
    this.User = JSON.parse(localStorage.getItem('currentUser'));
    this.Username = this.User['Username'];
    

    if (this.commentObj.Comment && this.commentObj.rating) {

    //  this.fileUploadService.addComment({token:this.hostedId,Id:this.appIdToUpdate,Comment:this.commentObj.Comment,Username:this.Username,Review: null,CommentDate: null,ReviewDate: null,ReviewUsername: null}).subscribe(res => {
    //   console.log("data update: " + res);
    //   // this.showMessage = true;      
    // }
    // );

    this.fileUploadService.addRating({token:this.hostedId,rating:this.commentObj.rating}).subscribe(res => {
      console.log("data update: " + res);
      this.showMessage = true;      

    }
    );

    }
    else{
      this.errorMessageComment=true;

    }
  }
  
  // showMessage(){
  //   this.showMessage = true;

  //   setTimeout(function(){
  //     this.showMessage = false;
  //   },3000);
  // }


  //onCommentSubmit function ends

  onReviewSubmit(userComment,adminReview,CommentId,commnetUsername) {
    this.User = JSON.parse(localStorage.getItem('currentUser'));
    this.Username = this.User['Username'];
    

    if (adminReview.value) {

     this.fileUploadService.addComment({token:this.hostedId,Id:CommentId ,Comment:userComment,Username:commnetUsername,Review: adminReview.value,CommentDate: null,ReviewDate: null,ReviewUsername: this.Username}).subscribe(res => {
      console.log("data update: " + res);
      this.showMessage = true;

     

      
      // description=null;
      // version=null;
      // iphonepackage=null;
      // ipadpackage=null;
      // this.AppIconUploadFile=null;
      // this.androidbuildUploadFile=null;
    }

    );

    }
    else{
      this.errorMessageComment=true;

    }
  }

  


}