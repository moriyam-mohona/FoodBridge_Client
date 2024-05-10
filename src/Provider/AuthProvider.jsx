import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../Firebase/Firebase.config";

import { createContext, useEffect, useState } from "react";
// import toast from "react-hot-toast";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(loading);

  // console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      //   if (user) {}
    });
    return () => unsubscribe();
  }, []);

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  // updateProfile(auth.currentUser, {
  //     displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
  // })

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  //   // {
  //   //   displayName: name,
  //   //   photoURL: photo,
  //   // }
  //     .then(() => {
  //       toast.success("Profile Updated successfully");
  //     })
  //     .catch((error) => {
  //       toast.error(error.message);
  //     });
  // };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logout = () => {
    // setLoading(true);
    setUser(null);
    // console.log("logout")
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logout,
    updateUserProfile,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
