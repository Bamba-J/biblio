import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userform!: FormGroup; 
  email!: string;
  password!: string;

  constructor( private authservice: AuthService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.initform()
  }
  onSubmitForm(){
   let formValue = this.userform.value
    this.email = formValue["email"];
    this.password = formValue["password"]
    this.authservice.signIn(this.email, this.password);
}
  initform(){
    this.userform = this.formBuilder.group({
        email : ['', [Validators.required, Validators.email]],
        password: ['', [Validators.minLength(8), Validators.required ]]
    })
  }

}