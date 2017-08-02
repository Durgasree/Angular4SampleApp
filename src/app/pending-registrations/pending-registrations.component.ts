
import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';


@Component({
  selector: 'app-pending-registrations',
  templateUrl: './pending-registrations.component.html',
  styleUrls: ['./pending-registrations.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class PendingRegistrationsComponent implements OnInit {

  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  users = []
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
                  this.users = data.users
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
