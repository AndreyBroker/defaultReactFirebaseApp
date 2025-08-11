import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { END } from 'redux-saga';
import { User } from '../types/redux/userTypes';
import { auth } from '../repositories/firebase';
import { AuthAction } from '../types/redux/authTypes';

class AuthenticationService{

  static async login (email: string | null, password: string | null) : Promise<User> {
    try {
      if(email == null || password == null) throw "Email ou senha inválido";
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      var user = userCredential.user;
      return {
        name: user.displayName,
        password: null,
        email: user.email ?? ""
      };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      throw error;
    }
  };
  
  static async logout(){
    try {
        await signOut(auth);
    } catch (error) {
        console.error('Erro ao fazer logout:', error);
        throw error;
    }
  };

  static onStateChange(emit: (input: AuthAction | END) => void){
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        emit({ type: 'USER_LOGGED_IN', payload: {email: user.email, name: user.displayName, password: null } });
      } else {
        emit({ type: 'USER_LOGGED_OUT' });
      }
    });
  }

}

export default AuthenticationService;