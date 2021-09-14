import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BookListComponent } from './book-list/book-list.component';
import { SingleBookComponent } from './book-list/single-book/single-book.component';
import { BookFormComponent } from './book-list/book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { BooksService } from './services/books.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { Error404Component } from './error404/error404.component';


const appRoutes: Routes = [
  {path: 'auth/signin', component :SigninComponent},
  {path: 'auth/signup', component :SignupComponent},
  {path: 'books', component :BookListComponent},
  {path: 'books/new', component :BookFormComponent},
  {path: 'error', component :Error404Component},
  {path: 'books/new/:id', component :SingleBookComponent},
  {path: '', component :BookListComponent},
  {path: "**", redirectTo :"error"},
  

]

const firebaseConfig = {
  apiKey: "AIzaSyCofjDz2MJwGKuWN1W6FAq9mGTuKp-tyCM",
  authDomain: "biblio-2f7c3.firebaseapp.com",
  projectId: "biblio-2f7c3",
  storageBucket: "biblio-2f7c3.appspot.com",
  messagingSenderId: "801713643079",
  appId: "1:801713643079:web:e213d59ea54972684a9b62"
};


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    BookListComponent,
    SingleBookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig)
    
  ],
  providers: [
    AuthGuardService,
    AuthService,
    BooksService,
    AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
