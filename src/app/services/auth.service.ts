import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  auth = false
  constructor(private router: Router, private Auth : AngularFireAuth) { 

  }
  signIn(email: string, password: string){ 
    if(email && password) 
      this.Auth.signInWithEmailAndPassword(email,password).then(()=>{
        this.auth = true
      }).catch((error)=>{
        console.log(error)
      })

      
      this.router.navigate(["books"])
     
  }
  signUp(name: string, prenom:string, email:string, password:string) {
    if(name && password && email && prenom) {
      this.auth = true
    }
  }
}
