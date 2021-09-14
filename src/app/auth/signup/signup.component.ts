import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userform!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private authservice: AuthService) { }

  ngOnInit(): void {
      this.initform()
  }
  initform() {
      this.userform = this.formBuilder.group( {
        name:["", Validators.required],
        prenom:["", Validators.required],
        email:["",[Validators.required, Validators.email]],
        password:["",[Validators.required,Validators.minLength(8)]]
      })
  }
  onSubmitform() {
    let formValue = this.userform.value;
    this.authservice.signUp(formValue["name"], formValue["prenom"],formValue["email"], formValue["password"])

  }
  
  

}

  
