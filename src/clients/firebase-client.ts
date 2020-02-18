import { UserSignUp } from 'types/user';
import firebase from 'firebase-admin';

class FirebaseClient {
  
  client: firebase.app.App;

  constructor() {
    // Initialize client.
    this.client = firebase.initializeApp();
  }

  createUser(userData: UserSignUp): Promise<firebase.auth.UserRecord> {
    const {
      email,
      password
    } = userData;

    try {
      return this.client.auth().createUser({
        email,
        password
      })
    } catch (error) {
      throw new Error();      
    }
  }
}

export default new FirebaseClient();
