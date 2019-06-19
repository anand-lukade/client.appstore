
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class EditappdetailService {

    private loggedIn = new BehaviorSubject<boolean>(false); // {1}
    public userName = new Subject<string>(); // {1}


    setUserdetails(value: string) {
        this.userName.next(value);
    }


    get isLoggedIn() {
        console.log("2 :" + this.loggedIn);

        return this.loggedIn.asObservable(); // {2}

    }

    constructor(private http: HttpClient, private router: Router) { }

    createAuthorizationHeader() {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        var token = user.Token;
        let headers = new HttpHeaders({
            'Authorization': 'Bearer ' + token
        });
        return headers;
    }

    getHostedAppDetails(value: string) {
        var headers = this.createAuthorizationHeader();
        return this.http.get<any>(
            `https://apimorrisonstore.azurewebsites.net/HostedApps/` + value,
            { headers })
            .pipe(map(res => {
                return res;
            }));
    }

    getThirdPartyAppDetails(value: string) {
        var headers = this.createAuthorizationHeader();
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/ThirdPartyApps/` + value,{headers})
            .pipe(map(res => {
                return res;
            }));
    }

    getWebPageAppDetails(value: string) {
        var headers = this.createAuthorizationHeader();
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/Webpages/` + value, {headers})
            .pipe(map(res => {
                return res;
            }));
    }

    getdocumentAppDetails(value: string) {
        var headers = this.createAuthorizationHeader();
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/Documents/` + value, {headers})
            .pipe(map(res => {
                return res;
            }));
    }

    logout() {        
        localStorage.removeItem('currentUser');
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
}