
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject,Subject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class EditappdetailService {

    private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    public userName = new Subject<string>(); // {1}


    setUserdetails(value: string) {
        this.userName.next(value);
      }


    get isLoggedIn() {
        console.log("2 :"+ this.loggedIn);

        return this.loggedIn.asObservable(); // {2}

      }

    constructor(private http: HttpClient, private router: Router) { }

   

    getHostedAppDetails(value:string) {
        // console.log(username +" "+ password );
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/HostedApps/`+value)
            .pipe(map(res => {
                 return res;
            }));
    }

    getThirdPartyAppDetails(value:string) {
        // console.log(username +" "+ password );
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/ThirdPartyApps/`+value)
            .pipe(map(res => {
                 return res;
            }));
    }

    getWebPageAppDetails(value:string) {
        // console.log(username +" "+ password );
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/Webpages/`+value)
            .pipe(map(res => {
                  return res;
            }));
    }

    getdocumentAppDetails(value:string) {
        // console.log(username +" "+ password );
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/Documents/`+value)
            .pipe(map(res => { 
                 return res;
            }));
    }
    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}