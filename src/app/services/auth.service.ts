import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';

@Injectable()
export class AuthService {
  auth = false
  constructor(private router: Router, private Auth : AngularFireAuth, private db: AngularFirestore, private toast : ToastrService ) { 

  }
  signIn(email: string, password: string){ 

      this.Auth.signInWithEmailAndPassword(email,password).then(()=>{
          this.toast.success("authentifié", "Bingo")
          this.auth = true
          this.router.navigate(["books"])

      }).catch((error)=>{
        console.log(error)
        this.toast.error("email ou mot de passe invalide", "Error")
      })

      
      
      
     
  }
  signUp(name: string, prenom:string, email:string, password:string) {

      
                  this.Auth.createUserWithEmailAndPassword(email,password).then(()=>{

                              this.auth = true;
                              

                              this.db.collection("/user").add({

                                name : name,
                                prenom: prenom,
                                email : email,
                                password: password
              
                            })

                      }).then(()=>{

                                this.router.navigate(['books']);
                                this.toast.success('utilisateur ajouté', 'Bingo')

                      }).catch((error)=>{

                                this.toast.error('error', error)
                      
                      })
          }

          
          
  }

