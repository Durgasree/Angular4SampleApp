
import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';


@Component({
  selector: 'app-pending-interviewers',
  templateUrl: './pending-interviewers.component.html',
  styleUrls: ['./pending-interviewers.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class PendingInterviewersComponent implements OnInit {
  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  interviewers = []
  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.apiService.getPendingInterviewers().subscribe(
              data => {
                if(data.success){
                  if(data.authentication_token){
                    this.sessionStorageService.setLocalTokens(data);
                  }
                  this.interviewers = data.interviewers
                }else{
                  
                }
              }
            );
        }else{
          this.router.navigateByUrl('login');
        }
      }
    );
  }

}
