import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
@Injectable()
export class SessionstorageService {

  constructor() { }
  setLocalTokens(data){
    console.log("setting tokens ------------------------------------------------");
    if (data.user){
      localStorage.setItem('user_id', data.user.id); 
    }
    
    localStorage.setItem('authentication_token', data.authentication_token);
    localStorage.setItem('refresh_token', data.refresh_token);
    localStorage.setItem('refresh_token_expire_time', data.refresh_token_expire_time);
    console.log("setting tokens ------------------------------------------------");
  }

  clearLocalTokens(){
    localStorage.removeItem('user_id');
    localStorage.removeItem('authentication_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('refresh_token_expire_time');
    console.log("cleared tokens ------------------------------------------------");
  }


}
