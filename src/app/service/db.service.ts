import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import * as M from 'materialize-css';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private angFireStore:AngularFirestore, private authService:AuthService) { }
  
  saveQuote(quote:string)
  {
    this.angFireStore.firestore.collection('quotes').add({
      text:quote,
      By:this.authService.getUId()
    })
    .then((data)=>{
      M.toast({html:'Quote added Succesfully', classes:"green"});
      console.log("quote is", data);
    })
    .catch((err)=>{
      M.toast({html:'Error while adding quote', classes:"red"});
    })
  }

  getAllQuotes(): Promise<any[]>
  {
    return this.angFireStore.firestore.collection('quotes').get().then(docRef => {
    return  docRef.docs.map(doc => doc.data()
      ) 
    });
  }

}
