import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

import { Router } from '@angular/router';

@Injectable()
export class DashboardService {

    private loggedIn = new BehaviorSubject<boolean>(false); // {1}


    get isLoggedIn() {
        console.log("2 :"+ this.loggedIn);

        return this.loggedIn.asObservable(); // {2}

      }

    constructor(private http: HttpClient, private router: Router) { }

   

    getHostedApp() {
        // console.log(username +" "+ password );
        return this.http.get<any>(`https://apimorrisonstore.azurewebsites.net/HostedApps`)
            .pipe(map(res => {
                // login successful if there's a jwt token in the response
                // if (user && user.token) {
                //     // store user details and jwt token in local storage to keep user logged in between page refreshes
                //     localStorage.setItem('currentUser', JSON.stringify(user));
                //     this.loggedIn.next(true);
                //     console.log("1:"+ this.loggedIn);

                // }

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