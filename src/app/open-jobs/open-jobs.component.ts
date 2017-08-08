import { Component, OnInit } from '@angular/core';
import {ApiService } from '../api.service';
import {Router} from '@angular/router';
import {SessionstorageService} from '../sessionstorage.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-open-jobs',
  templateUrl: './open-jobs.component.html',
  styleUrls: ['./open-jobs.component.css'],
  providers: [ApiService,SessionstorageService]
})
export class OpenJobsComponent implements OnInit {

  constructor(private modalService: NgbModal,private apiService: ApiService,public router: Router,private sessionStorageService: SessionstorageService) { }
  jobs = []
  closeResult: string;
  searchForm = {};
  newCandidateForm = {datetime: new Date()};
  job_id;
  data;

  addCandidate(current_job_id){
    console.log(this.newCandidateForm)
    console.log(this.job_id)
  }

   open(content,job_id) {
    this.job_id = job_id
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;      
      console.log(this.job_id)
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  search(data){
    console.log(data)
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getJobFullDetails(job_id){
    this.apiService.getJobDetails(job_id).subscribe(
    data => {
            if(data.success){
              if(data.authentication_token){this.sessionStorageService.setLocalTokens(data);}
              this.data = data
              console.log(this.data)
            }else{
              
            }
        }
   );
  }

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
