import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { DashboardService } from '../services/dashboardCall.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    private loggedIn = new BehaviorSubject<boolean>(false); // {1}


    get isLoggedIn() {
        console.log("2 :" + this.loggedIn);

        return this.loggedIn.asObservable(); // {2}

    }

    constructor(private dashboardService: DashboardService, private http: HttpClient, private router: Router) { }



    login(username: string, password: string) {
        // console.log(username +" "+ password );
        return this.http.post<any>(`https://apimorrisonstore.azurewebsites.net/Login`, { Username: username, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.Token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn.next(true);
                    console.log("1:" + this.loggedIn);

                }

                return user;
            }));
    }
    User = '';
    logout() {
        this.User = JSON.parse(localStorage.getItem('currentUser'));
        localStorage.removeItem('currentUser');
        this.dashboardService.setUserdetails(null);
        if (this.User) {
            if (this.User['IsAdmin']==true) {                
                this.router.navigate(['/login']);
            }
            else {
                window.location.href = 'assets/qrLogin.html';
            }
        }
        // remove user from local storage to log user out

        // this.loggedIn.next(false);



    }
}