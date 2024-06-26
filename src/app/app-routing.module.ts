import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsSignupComponent } from './parent/parents-signup/parents-signup.component';
import { ParentDashboardComponent } from './parent/parent-dashboard/parent-dashboard.component';
import { ParentLoginComponent } from './parent/parent-login/parent-login.component';

const routes: Routes = [
  { path: 'parent-signup', component: ParentsSignupComponent},
  { path: 'login', component: ParentLoginComponent},
  { path: 'dashboard', component: ParentDashboardComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
