

import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';

@Component({
  selector: 'app-deactivated-users',
  templateUrl: './deactivated-users.component.html',
  styleUrls: ['./deactivated-users.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class DeactivatedUsersComponent implements OnInit {

  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  users = []
  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.apiService.getDeactivatedUsers().subscribe(
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
