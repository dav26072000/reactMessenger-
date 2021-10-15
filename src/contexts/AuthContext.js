// eslint-disable-next-line import/no-named-as-default
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../libs/firebase";
import { addUser } from "../services/user.services";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  async function signup(email, password) {
    try {
      await auth
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          addUser({
            email,
            password,
            uid: response.user.uid,
          });
        });
    } catch (error) {
      throw new Error(error);
    }
  }

  // async function checkIfSignedIn() {
  //   await auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       return true;
  //     }
  //     return false;
  //   });
  // }

  async function signOut() {
    try {
      auth.signOut();
    } catch (error) {
      throw new Error(error);
    }
  }

  async function signIn(username, password) {
    try {
      await auth.signInWithEmailAndPassword(username, password);
    } catch (error) {
      throw new Error(error);
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signup,
    signOut,
    signIn,
    // checkIfSignedIn,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
