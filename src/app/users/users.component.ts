import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {SessionstorageService} from '../sessionstorage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

   constructor(private apiService: ApiService,private sessionStorageService: SessionstorageService,public router: Router) { }

  ngOnInit() {
    this.apiService.verifyAuthToken().subscribe(
      data => {
        if(data.success){
          this.router.navigateByUrl('user-dashboard/users/recruiters');
        }else{
          this.router.navigateByUrl('login');
        }
      }
    );
  }

}
