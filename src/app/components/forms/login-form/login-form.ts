import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule,CommonModule],
  selector: 'app-login-form',
  styleUrl: './login-form.css',
  templateUrl: './login-form.html',
})
export class LoginForm {
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
      console.log(form.value)
      this.formValue = form.value 
    } 
  }
}
