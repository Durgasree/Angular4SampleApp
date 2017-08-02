import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Response, Headers } from '@angular/http';

@Injectable()
export class ApiService {
  IP  = "http://172.16.19.70:3000/"
  constructor(public http: Http) { }



  createAuthorizationHeader(headers: Headers) {
    headers.append('AUTHENTICATION_TOKEN', localStorage.getItem('authentication_token'))
    headers.append('REFRESH_TOKEN',localStorage.getItem('refresh_token'))
  }


  verifyAuthToken(): any{
    return this.getRequest(this.IP + "/users/verify_authentication_token")
  }



  logIn (userObj):any{
    let url = this.IP + "/users/sign_in"  
    return this.http.post(url,userObj).map((res:Response) => {
      return <any> res.json()
      }
    );
  }  

  logOut():any{
    let url = this.IP + "/users/sign_out"
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
     return this.http.post(url,{},{headers: headers}).map((res: Response) => {
      return <any> res.json()
     });
  }

  getOpenJobs():any{
   return this.getRequest(this.IP + "/recruiters/jobs_list")
  }

  getInterviews():any{
    return this.getRequest(this.IP + "/admin/interviews")
  }

  getNotifications(){
    return this.getRequest(this.IP + "/admin/notifications")
  }

  getRecruiters(){
    return this.getRequest(this.IP + "/admin/recruiters")
  }

  getActiveInterviewers(){
    return this.getRequest(this.IP + "admin/search_interviewers")
  }

  getPendingInterviewers(){
    return this.getRequest(this.IP + "admin/pending_interviewers")
  }
  
  getDeactivatedUsers(){
    return this.getRequest(this.IP + "/get_deactivated_users")
  }

  getPendingRegistrations(){
    return this.getRequest(this.IP + "pending_registrations")
  }

  getRequest(url,params={}){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {headers: headers}).map((res: Response) => {
     return <any> res.json()
   })
  }

}
