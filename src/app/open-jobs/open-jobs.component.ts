import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';

@Component({
  selector: 'app-open-jobs',
  templateUrl: './open-jobs.component.html',
  styleUrls: ['./open-jobs.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class OpenJobsComponent implements OnInit {

  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  jobs = []
  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.apiService.getOpenJobs().subscribe(
              data => {
                if(data.success){
                  if(data.authentication_token){
                    this.sessionStorageService.setLocalTokens(data);
                  }
                  this.jobs = data.jobs
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
