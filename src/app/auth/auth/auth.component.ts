import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { DatalayerService } from 'src/app/datalayer.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';
  constructor(private authService: AuthService,private datalayer:DatalayerService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
     
    
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signup(email, password).subscribe(res =>{
    if(res.token != null){
     
    }},
      error =>console.log(error));
     
   
  }
}
