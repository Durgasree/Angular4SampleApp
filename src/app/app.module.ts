import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {RouterModule,Routes} from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SessionComponent } from './session/session.component';
import { OpenJobsComponent } from './open-jobs/open-jobs.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { UsersComponent } from './users/users.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { HeaderComponent } from './header/header.component';
import { RecruitersComponent } from './recruiters/recruiters.component';
import { ActiveInterviewersComponent } from './active-interviewers/active-interviewers.component';
import { PendingInterviewersComponent } from './pending-interviewers/pending-interviewers.component';
import { PendingRegistrationsComponent } from './pending-registrations/pending-registrations.component';
import { DeactivatedUsersComponent } from './deactivated-users/deactivated-users.component';



const routes: Routes = [
  {path: '',redirectTo: 'user-dashboard/open-jobs',pathMatch: 'full'},
  {path: 'login',component: SessionComponent},
  {path: 'user-dashboard',component: UserDashboardComponent,children: [
    {path: 'open-jobs',component: OpenJobsComponent},
    {path: 'interviews',component: InterviewsComponent},
    {path: 'users',component: UsersComponent,children: [
      {path: 'recruiters',component: RecruitersComponent},
      {path: 'active-interviewers',component: ActiveInterviewersComponent},
      {path: 'pending-interviewers',component: PendingInterviewersComponent},
      {path: 'deactivated-users',component: DeactivatedUsersComponent},
      {path: 'pending-registrations',component: PendingRegistrationsComponent},
    ]},
    {path: 'notifications',component: NotificationsComponent},
  ]},
]



@NgModule({
  declarations: [
    AppComponent,
    UserDashboardComponent,
    SessionComponent,
    OpenJobsComponent,
    InterviewsComponent,
    UsersComponent,
    NotificationsComponent,
    HeaderComponent,
    RecruitersComponent,
    ActiveInterviewersComponent,
    PendingInterviewersComponent,
    PendingRegistrationsComponent,
    DeactivatedUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      routes
      // { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
