import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAb5fNPX4OZEu6QtWwRRa8e4a5Pu0DlIqE',
  authDomain: 'fir-angublog-9ded7.firebaseapp.com',
  projectId: 'fir-angublog-9ded7',
  storageBucket: 'fir-angublog-9ded7.appspot.com',
  messagingSenderId: '156899148477',
  appId: '1:156899148477:web:237879b3d845cc78a1edd4',
  measurementId: 'G-VZH4MHJP1B',
};

@NgModule({
  declarations: [],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
  ],
  exports: [],
  providers: [],
})
export class FirebaseModule {}
