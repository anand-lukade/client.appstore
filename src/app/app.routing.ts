import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register';
import { AuthGuard } from './guards/auth.guard';
import { HostedappComponent } from './hostedapp/hostedapp.component';
import { ThirdPartyAppComponent } from './third-party-app/third-party-app.component';
import { WebPageAppComponent } from './web-page-app/web-page-app.component';
import { DocumentAppComponent } from './document-app/document-app.component';
import { AddnewcategoryComponent } from './addnewcategory/addnewcategory.component';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'hostedapp', component: HostedappComponent, canActivate: [AuthGuard] },
    { path: 'thirdparty', component: ThirdPartyAppComponent, canActivate: [AuthGuard] },
    { path: 'webpage', component: WebPageAppComponent, canActivate: [AuthGuard] },
    { path: 'document', component: DocumentAppComponent, canActivate: [AuthGuard] },
    { path: 'category', component: AddnewcategoryComponent, canActivate: [AuthGuard] },


    { path: 'login', component: LoginComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);