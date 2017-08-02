import { Component } from '@angular/core';
import {ApiService } from './api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})

export class AppComponent {
  constructor(private apiService: ApiService,public router: Router){}
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


  

}