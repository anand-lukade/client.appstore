import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { DashboardService } from '../services/dashboardCall.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  

  UserName: string;
  subscription: Subscription;

  constructor(private authentication:AuthenticationService,private dashboardservice: DashboardService) { }
  ngOnInit() {     

        this.subscription = this.dashboardservice.userName.subscribe(
          (UserName) => {
            this.UserName = UserName;
          }
        );        
    
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  

}
