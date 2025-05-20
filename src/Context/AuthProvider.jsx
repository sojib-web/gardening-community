// @ts-nocheck
import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/Firebase_config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (user, name, photoURL) => {
    return updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const userInfo = {
    user,
    signUp,
    logIn,
    googleLogin,
    logOut,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
