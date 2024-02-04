import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';
import { AngularFireModule } from '@angular/fire/compat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-auth';

  ngOnInit()
  {
    AngularFireModule.initializeApp(firebaseConfig);
    this.setCookie();
  }

  setCookie() {
    document.cookie = "myCookie=myValue; SameSite=None; Secure";
  }
}
