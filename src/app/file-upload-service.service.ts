
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
// import { throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class FileUploadService {

  apiUrlHostedApp = 'https://apimorrisonstore.azurewebsites.net/HostedApps';
  apiUrlThirdPartyApp = 'https://apimorrisonstore.azurewebsites.net/ThirdPartyApps';
  // apiUrlDocumentApp = 'http://localhost:59739/Documents';
  //apiUrlHostedApp = 'http://localhost:59739/HostedApps';

  apiUrlWebApp = 'https://apimorrisonstore.azurewebsites.net/Webpages';
  apiUrlDocumentApp = 'https://apimorrisonstore.azurewebsites.net/Documents';
  apiUrlAddNewCategory = 'https://apimorrisonstore.azurewebsites.net/Categories';
  apiUrlGetewCategory = 'https://apimorrisonstore.azurewebsites.net/Categories';
  apiUrlGetComment = 'https://apimorrisonstore.azurewebsites.net/Comments/';
  apiUrlpostRating="https://apimorrisonstore.azurewebsites.net/Ratings/";


  createAuthorizationHeader() {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    var token = user.Token;
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return headers;
  }

  constructor(private http: HttpClient) { }
  getCategory() {
    var headers = this.createAuthorizationHeader();
    return this.http.get<any>(this.apiUrlGetewCategory, { headers })
      .pipe(map(res => {
        return res;
      }));
  }

  addComment(formData){
      var headers = this.createAuthorizationHeader();
      return this.http.post<any>(`${this.apiUrlGetComment}`+formData.token, formData, {
        headers
      }).pipe(
        map(res => {
          return res
        }
        )
      );

  }

  addRating(formData){

    var headers = this.createAuthorizationHeader();
    var url=this.apiUrlpostRating+formData.rating+'/'+formData.token;
      return this.http.put<any>(url,{},{
        headers
      }).pipe(
        map(res => {
          return res
        }
        )
      );
  }

  addNewCategory(categoryname) {
    var headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrlAddNewCategory}`, { Id: 0, name: categoryname }, {
      headers
    }).pipe(
      map(res => {
        return res
      }
        // console.log(res)
      )
      //   event => this.getEventMessage(event, formData)),
      // catchError(this.handleError)
    );
  }

  uploadDocumentApp(formData) {
    var headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrlDocumentApp}`, formData, {
      headers
    }).pipe(
      map(res => {
        return res
      }

      )

    );
  }

  uploadWebApp(formData) {
    var headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrlWebApp}`, formData, {
      headers
    }).pipe(
      map(res => {
        return res
      }
      )
    );
  }

  uploadThirdPartyApp(formData) {
    var headers = this.createAuthorizationHeader();

    return this.http.post<any>(`${this.apiUrlThirdPartyApp}`, formData, {
      headers
    }).pipe(
      map(res => {
        return res
      }
      )
    );
  }
  upload(formData) {
    var headers = this.createAuthorizationHeader();
    return this.http.post<any>(`${this.apiUrlHostedApp}`, formData, {
      headers
    }).pipe(
      map(res => {
        return res
      }
      )
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