import { Component, EventEmitter, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AlertifyService } from '../_services/Alertify.service';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  model: any = {};
  registerForm: any = FormGroup ;

  constructor(private authService: AuthService, private router :Router,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createRegisterFrom();
  }
  createRegisterFrom(){
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      confirmPassword: ['', Validators.required]
    }, {validators: this.passwordMatchValidator});
  }

  passwordMatchValidator(g:any= FormGroup) {
    return g.get('password').value === g.get('confirmPassword').value ? null : {'mismatch': true};
  }

   //show hide div variables
   userlogin = true;
   userregister = false;
   //Buttons clicks functionalities
   user_register()
   {
     this.userlogin = false;
     this.userregister = true;
   }
   user_login()
   {
     this.userlogin = true;
     this.userregister = false;
   }
   login(){
     this.authService.login(this.model).subscribe(next => {
       console.log("Logged in Successful");
     }, error => {
       console.log('failed to login')
     }, () => {
      this.router.navigate(['home']);
     });
   }
   register(){
     if(this.registerForm.valid){
       this.user = Object.assign({}, this.registerForm.value);
      this.authService.register(this.user).subscribe(() => {
        console.log('Registration successful');
      }, error => {
        console.log("erreur whyy");
      }, () => {
        this.authService.login(this.user).subscribe(() => {
          this.router.navigate(['/login']);
        });
      });
     }


    // this.authService.register(this.model).subscribe(() => {
    //   console.log('registration sucessful');
    // },error => {
    //   console.log(error);
    // });
    console.log(this.registerForm.value);
  }


}
