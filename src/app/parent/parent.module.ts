import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentsSignupComponent } from './parents-signup/parents-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentLoginComponent } from './parent-login/parent-login.component';
import { ParentDashboardComponent } from './parent-dashboard/parent-dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ParentsSignupComponent,
    ParentLoginComponent,
    ParentDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ParentsSignupComponent
  ]
})
export class ParentModule { }
