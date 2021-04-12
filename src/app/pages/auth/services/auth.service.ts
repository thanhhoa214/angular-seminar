import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  async loginWithGoogle(): Promise<boolean> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await this.afAuth.signInWithPopup(provider);

    if (user) {
      localStorage.setItem('angublog-user', JSON.stringify(user));
    }
    return !!user;
  }

  logout(): Promise<void> {
    localStorage.removeItem('angublog-user');
    return this.afAuth.signOut();
  }

  getUser(): User {
    const userAsString = localStorage.getItem('angublog-user');
    return userAsString ? JSON.parse(userAsString) : null;
  }
}
