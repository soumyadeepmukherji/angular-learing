import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-login-form',
  styleUrl: './login-form.css',
  templateUrl: './login-form.html',
})
export class LoginForm {

  router = inject(Router)

  isLoggedIn = false

  userObj:any = {
    userName:'',
    email:'',
    password:'',
    role:'',
    isAcceptTerms: false,
  }

  formValue: any

  // onSubmit(){
  //   this.formValue = this.userObj
  // }

  submitForm(form: NgForm){
    if(form.valid){
      let user: any = localStorage.getItem('credentials')
      this.formValue = form.value 
      if(this.formValue.email == JSON.parse(user).emailId){
        this.isLoggedIn = true
        localStorage.setItem('status',JSON.stringify(this.isLoggedIn))
        this.router.navigate([''])
      }
      else{
        alert("User Dosen't exist")
      }

    } 
  }

}
