import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../Config/firebase.config";

export const NewsContext = createContext(null);

const AuthContext = ({ children }) => {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);

  console.log(user);

  // Create User......
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user........
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out user................
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // onAuthStateChanged.......
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  // data load form the json file in public folder..........
  useEffect(() => {
    fetch("news.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  const Authentication = {
    user,
    loading,
    news,
    createUser,
    signInUser,
    logOut,
  };
  return (
    <NewsContext.Provider value={Authentication}>
      {children}
    </NewsContext.Provider>
  );
};
AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
