
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
// import { throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class FileUploadService {

  apiUrlHostedApp = 'https://apimorrisonstore.azurewebsites.net/HostedApps';
  apiUrlThirdPartyApp = 'https://apimorrisonstore.azurewebsites.net/ThirdPartyApps';
  // apiUrlThirdPartyApp = 'http://localhost:59739/ThirdPartyApps';

  apiUrlWebApp = 'https://apimorrisonstore.azurewebsites.net/Webpages';
  apiUrlDocumentApp = 'https://apimorrisonstore.azurewebsites.net/Documents';
  apiUrlAddNewCategory = 'https://apimorrisonstore.azurewebsites.net/Categories';
  apiUrlGetewCategory = 'https://apimorrisonstore.azurewebsites.net/Categories';




  constructor(private http: HttpClient) { }
  getCategory() {
    // console.log(username +" "+ password );
    return this.http.get<any>(this.apiUrlGetewCategory)
        .pipe(map(res => {
              return res;
        }));
   }
  
  addNewCategory(categoryname) {
    console.log(categoryname);
    return this.http.post<any>(`${this.apiUrlAddNewCategory}`,{Id:0,name:categoryname}, {
      // reportProgress: true,
      // observe: 'events'
    }).pipe(
      map(res=>{
        return res
      }
        // console.log(res)
        )
      //   event => this.getEventMessage(event, formData)),
      // catchError(this.handleError)
    );
  }

  uploadDocumentApp(formData) {
    console.log(formData);
    return this.http.post<any>(`${this.apiUrlDocumentApp}`, formData, {
      // reportProgress: true,
      // observe: 'events'
    }).pipe(
      map(res=>{
        return res
      }
        // console.log(res)
        )
      //   event => this.getEventMessage(event, formData)),
      // catchError(this.handleError)
    );
  }

  uploadWebApp(formData) {
    console.log(formData);
    return this.http.post<any>(`${this.apiUrlWebApp}`, formData, {
      // reportProgress: true,
      // observe: 'events'
    }).pipe(
      map(res=>{
        return res
      }
        // console.log(res)
        )
      //   event => this.getEventMessage(event, formData)),
      // catchError(this.handleError)
    );
  }
  
  uploadThirdPartyApp(formData) {
    console.log(formData);
    return this.http.post<any>(`${this.apiUrlThirdPartyApp}`, formData, {
      // reportProgress: true,
      // observe: 'events'
    }).pipe(
      map(res=>{
        return res
      }
        // console.log(res)
        )
      //   event => this.getEventMessage(event, formData)),
      // catchError(this.handleError)
    );
  }
  upload(formData) {
    console.log(formData);
    return this.http.post<any>(`${this.apiUrlHostedApp}`, formData, {
      // reportProgress: true,
      // observe: 'events'
    }).pipe(
      map(res=>{
        return res
      }
        // console.log(res)
        )
      //   event => this.getEventMessage(event, formData)),
      // catchError(this.handleError)
    );
  }
/*
  private getEventMessage(event: HttpEvent<any>, formData) {

    switch (event.type) {

      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);

      case HttpEventType.Response:
        return this.apiResponse(event);

      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }*/

}