import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule,JsonPipe],
  selector: 'app-register-form',
  styleUrl: './register-form.css',
  templateUrl: './register-form.html',
})
export class RegisterForm {
  registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    emailId: new FormControl("",[Validators.email,Validators.required]),
    password: new FormControl(),
    role: new FormControl(),
    city: new FormControl(),
    state: new FormControl(),
    zipCode: new FormControl(),
    isAccept: new FormControl(),
  })

  formValue: any

  onSave(){
    this.formValue = this.registerForm.value
    localStorage.setItem('credentials',JSON.stringify(this.formValue))
  }
}
