import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {SessionstorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class UserDashboardComponent implements OnInit {

  constructor(private apiService: ApiService,private sessionStorageService: SessionstorageService,public router: Router) { }

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


}
