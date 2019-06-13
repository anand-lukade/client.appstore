import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

import { routing } from './app.routing';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {  AuthenticationService } from './services/authentication.service';
import {  AlertService } from './services/alert.service';
import {  DashboardService } from './services/dashboardCall.service';
import {  EditappdetailService } from './services/editappdetail.service';



import { AlertComponent } from './directives/alert.component';

import {  HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {  ErrorInterceptor } from './helpers/error.interceptor';
import { HostedappComponent } from './hostedapp/hostedapp.component';
import { FileUploadService } from './file-upload-service.service';

import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { ThirdPartyAppComponent } from './third-party-app/third-party-app.component';
import { WebPageAppComponent } from './web-page-app/web-page-app.component';
import { DocumentAppComponent } from './document-app/document-app.component';
import { AddnewcategoryComponent } from './addnewcategory/addnewcategory.component';
import { EdithostedappComponent } from './edit/edithostedapp/edithostedapp.component';
import { EditdocumentappComponent } from './edit/editdocumentapp/editdocumentapp.component';
import { EditthirdpartyappComponent } from './edit/editthirdpartyapp/editthirdpartyapp.component';
import { EditwebpageappComponent } from './edit/editwebpageapp/editwebpageapp.component';



// JwtInterceptor,
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    AlertComponent,
    HostedappComponent,
    ThirdPartyAppComponent,
    WebPageAppComponent,
    DocumentAppComponent,
    AddnewcategoryComponent,
    EdithostedappComponent,
    EditdocumentappComponent,
    EditthirdpartyappComponent,
    EditwebpageappComponent,
    
    
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    FilterPipeModule,
    FormsModule   
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService,
    FileUploadService,
    DashboardService,
    EditappdetailService,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
