import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JobServiceService } from '../HRservice/job-service.service';
import { AuthenticationService, UserService } from '../HRservice/loginservice';
import { User } from '../HRservice/models';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  jobList:any[];
  jobSubscription:Subscription;
  currentUser: User;
  currentUserSubscription: Subscription;

  constructor(private jobService: JobServiceService,private authenticationService: AuthenticationService,
    private userService: UserService) { this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
  });}

  ngOnInit() {
    console.log("inside ngOnInit");
    this.jobSubscription= this.jobService.getJobs()
    .subscribe((res:any[])=>{
      console.log(res);
      this.jobList = res;
  });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
}
}
