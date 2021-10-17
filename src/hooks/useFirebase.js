import { initializAuthentication } from '../components/Login/Firebase/firebase.init';

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializAuthentication();
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [users, setUsers] = useState({});

  // google sign in start
  const googleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
      })
      .catch((error) => {
        // const errorMessage = error.message;
      });
  };
  // google sign in end

  //   authenticate user start
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUsers(user);
      } else {
      }
    });
  }, []);
  //   authenticate user end

  //   sign out users

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return {
    googleSignIn,
    signOutUser,
    users,
  };
};

export default useFirebase;
