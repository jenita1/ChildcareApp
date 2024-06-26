import { Component } from '@angular/core';
import { AbstractControl, EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParentService } from '../../services';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ParentModel } from '../../modal/parent';

@Component({
  selector: 'app-parents-signup',
  templateUrl: './parents-signup.component.html',
  styleUrl: './parents-signup.component.css'
})
export class ParentsSignupComponent {
public parentForm!:FormGroup
submitted =false;
loading=false;
message = {
  status: '',
  msg: ''
};


constructor(
  private formBuilder: FormBuilder,
  private ParentService: ParentService,
  private router: Router

){}
  pForm(){
  this.parentForm =this.formBuilder.group({
    email:['', [Validators.required,Validators.email]],
    firstName:['', Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)],
    lastName:['', Validators.required],
    password:['',  Validators.required,
      Validators.minLength(6),
      Validators.maxLength(40)],
    confirmPassword:['', Validators.required],
    address:['', Validators.required],
    phone:['', Validators.required],
    nameOfChild:['', Validators.required],
    active:[Boolean],


  })
 
  }
  
  ngOnInit(){
    this.pForm();
    console.log('hi')
  }
  get f(): { [key: string]: AbstractControl } {
    return this.parentForm.controls;
  }

  get email(){
    return this.parentForm.controls['email']
  }
  get firstName(){
    return this.parentForm.controls['firstName']
  }
  get lastName(){
    return this.parentForm.controls['lastName']
  }
  get password(){
    return this.parentForm.controls['password']
  }
  get confirmPassword(){
    return this.parentForm.controls['confirmPassword']
  }
  get address(){
    return this.parentForm.controls['address']
  }
  get phone(){
    return this.parentForm.controls['phone']
  }
  get nameOfChild(){
    return this.parentForm.controls['nameOfChild']
  }
  onSubmit(){
    console.log('hello')
  this.submitted = true;
   
   this.loading= true;
   const postData = { ...this.parentForm.value };
   console.log(postData)

   this.ParentService.signupParent(postData)
   .subscribe(
    data =>{
      
      let msg ='Thank you for registering. Please verify your email address'
      alert("Successfully signup")
      console.log('Data is here',data)
      this.router.navigate(['/login'])
    },
    error =>{
      console.log('error in signup', error)
      // this.error.showError(error);

    }

   )
  }
}
