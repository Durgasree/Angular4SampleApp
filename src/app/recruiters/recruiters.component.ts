
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiters',
  templateUrl: './recruiters.component.html',
  styleUrls: ['./recruiters.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class RecruitersComponent implements OnInit {

  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  recruiters = []
  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.apiService.getRecruiters().subscribe(
              data => {
                if(data.success){
                  if(data.authentication_token){
                    this.sessionStorageService.setLocalTokens(data);
                  }
                  this.recruiters = data.recruiters
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
