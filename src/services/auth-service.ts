import firebase from '../config/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';

class AuthService {
  private readonly auth;
  /**
   *
   */
  constructor() {
    this.auth = getAuth(firebase);
  }

  async signup(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async signin(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
}

export default new AuthService();
