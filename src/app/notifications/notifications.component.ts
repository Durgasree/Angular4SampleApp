import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class NotificationsComponent implements OnInit {
  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  notifications = []
  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.apiService.getNotifications().subscribe(
              data => {
                if(data.success){
                  if(data.authentication_token){
                    this.sessionStorageService.setLocalTokens(data);
                  }
                  this.notifications = data.notifications
                }else{
                 alert(data.message[0]);
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
