import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Response, Headers,RequestOptions } from '@angular/http';

@Injectable()
export class ApiService {
  IP  = "http://172.16.19.180:3000/"
  constructor(public http: Http) { }



  createAuthorizationHeader(headers: Headers) {
    headers.append('AUTHENTICATION_TOKEN', localStorage.getItem('authentication_token'))
    headers.append('REFRESH_TOKEN',localStorage.getItem('refresh_token'))
  }


  verifyAuthToken(): any{
    return this.getRequest("users/verify_authentication_token")
  }

  createCandidate(candidateObj,job_id): any{
    let data = {job_id: job_id}
    return this.postRequest("admin/add_candidate",data)
  }


  logIn (userObj):any{
    let url = "users/sign_in"  
    return this.http.post(url,userObj).map((res:Response) => {
      return <any> res.json()
      }
    );
  }  

  logOut():any{
     return this.postRequest("users/sign_out")
  }

  getOpenJobs():any{
   return this.getRequest("recruiters/jobs_list")
  }

  getInterviews():any{
    return this.getRequest("admin/interviews")
  }

  getNotifications(){
    return this.getRequest("admin/notifications")
  }

  getRecruiters(){
    return this.getRequest("admin/recruiters")
  }

  getActiveInterviewers(){
    return this.getRequest("admin/search_interviewers")
  }

  getPendingInterviewers(){
    return this.getRequest("admin/pending_interviewers")
  }
  
  getDeactivatedUsers(){
    return this.getRequest("get_deactivated_users")
  }

  getPendingRegistrations(){
    return this.getRequest("pending_registrations")
  }

  getJobDetails(job_id){
   return this.getRequest("admin/job_details",{job_id: job_id}) 
  }

  getRequest(url,params={}){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    let options = new RequestOptions({headers:headers,params: params});
    return this.http.get((this.IP + url),options).map((res: Response) => {
     return <any> res.json()
   })
  }

  postRequest(url,data={}){
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post((this.IP + url),data,{headers: headers}).map((res: Response) => {
      return <any> res.json()
    });
  }

}
