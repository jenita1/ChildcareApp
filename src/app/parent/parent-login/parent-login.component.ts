import { Component } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-login',
  templateUrl: './parent-login.component.html',
  styleUrl: './parent-login.component.css'
})
export class ParentLoginComponent {
  public loginForm!: FormGroup
  loading =false;
  submitted =false;

  constructor(
    private formBuilder: FormBuilder,
    private parentService: ParentService,
    private router: Router

  ){
  }
  login(){
    this.loginForm =this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
      token:[true]


    })
  }
  ngOnInit(){
    this.login();
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  get email(){
    return this.loginForm.controls['email']
  }
  get password(){
    return this.loginForm.controls['password']
  }
  onSubmit(){
    console.log('hello')
  this.submitted = true;
   
   this.loading= true;
   const postData = { ...this.loginForm.value };
   console.log(postData)

   this.parentService.loginParent(postData)
   .subscribe(
    data =>{
      
      // let msg ='Thank you for registering. Please verify your email address'
      alert(" Hi you are Successfully logged in")
      console.log('Data is here',data)
      this.router.navigate(['/dashboard'])
    },
    error =>{
      console.log('error in signup', error)
      // this.error.showError(error);

    }

   )
}
}

