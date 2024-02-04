import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import * as M from 'materialize-css';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId?: string;

  IsAuthenticated():Boolean
  {
    const uid = localStorage.getItem('userId');
    if(uid){
      this.userId = uid;
    }
    return !!this.userId;
  }

  getUId()
  {
    return this.userId;
  }

  constructor(private afAuth: AngularFireAuth, private route:Router) { }
  
  register(email:string, password:string)
  {
    this.afAuth.createUserWithEmailAndPassword(email,password)
    .then((userdetails:any)=>{
      this.userId = userdetails.user.email;
      localStorage.setItem("userId", userdetails.user.email);
      console.log(userdetails);
      M.toast({html:'User Registered Succesfully', classes:"green"});
    }).catch((err)=>{
      console.log(err)
    })
   
  }

  logIn(email:string, password:string)
  {
    this.afAuth.signInWithEmailAndPassword(email,password).then((userdetails:any)=>{
      this.userId = userdetails.user.email;
      localStorage.setItem("userId", userdetails.user.email);
      console.log(userdetails);
      M.toast({html:'User Logged In Succesfully', classes:"green"});
      this.route.navigate(['/']);
    }).catch((err)=>{
      M.toast({html:'Enter Correct Email and Password', classes:"red"});
      console.log(err)
    })  
  }

  logOut()
  {
    this.afAuth.signOut().then(()=>{
      this.userId = undefined;
      localStorage.removeItem("userId");
    })
  }
}
