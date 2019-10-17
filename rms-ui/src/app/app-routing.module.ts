import { JobComponent } from './component/HR/job/job.component';
import { AddjobComponent } from './component/HR/addjob/addjob.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobdetailComponent } from './component/HR/jobdetail/jobdetail.component';
import { LoginComponent } from './component/HR/login/login.component';
import { RegisterComponent } from './component/HR/register';
import { AuthGuard } from './component/HR/HRservice/helper';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path : 'jobs', component : JobComponent,canActivate: [AuthGuard]},
  {path : 'jobs/addjob', component : AddjobComponent},
  {path : 'jobs/:id', component : JobdetailComponent},
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
