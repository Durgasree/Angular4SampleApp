import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
     userPresent = false;
    title = 'Sample App';

  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
           this.userPresent = true;
          this.router.navigateByUrl('user-dashboard/open-jobs');
        }else{
          this.router.navigateByUrl('login');
        }
      }
    );
  }

    logout(){
    this.apiService.logOut().subscribe(
      data => {
        console.log(data);
        if(data.success){
          this.sessionStorageService.clearLocalTokens();
          this.userPresent = false;
          this.router.navigateByUrl('login');
        }
      }
    )
  }

}
