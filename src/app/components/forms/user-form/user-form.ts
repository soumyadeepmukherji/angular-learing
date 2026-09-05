import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { LoginForm } from '../login-form/login-form';
import { RegisterForm } from '../register-form/register-form';

@Component({
  imports: [RouterLink, RouterOutlet],
  selector: 'app-user-form',
  styleUrl: './user-form.css',
  templateUrl: './user-form.html',
})
export class UserForm {}
