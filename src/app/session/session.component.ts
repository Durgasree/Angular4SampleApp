import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {SessionstorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class SessionComponent implements OnInit {

  constructor(private apiService: ApiService,private sessionStorageService: SessionstorageService,public router: Router) { }
  userPresent = false;
  title = 'Sample App';
  userForm = {email: '',password: ''};
  errorMessage = ""

  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.router.navigateByUrl('user-dashboard/open-jobs');
        }else{
          this.router.navigateByUrl('login');
        }
      }
    );
  }
  
  login(){
    this.apiService.logIn(this.userForm).subscribe(
      data  => {
        if(data.success){
          this.sessionStorageService.setLocalTokens(data);
          this.router.navigateByUrl('user-dashboard/open-jobs');
        }
        else{
          this.errorMessage = data.message[0]
        }
      }
    )
  }

}
