import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import PropTypes from "prop-types";
import auth from "../Config/firebase.config";

export const NewsContext = createContext(null);

const AuthContext = ({ children }) => {
  const [news, setNews] = useState([]);
  const [user, setUser] = useState(null);

  // Create User......
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user........
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // onAuthStateChanged.......
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
  }, []);

  // data load form the json file in public folder..........
  useEffect(() => {
    fetch("news.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  const Authentication = { user, news, createUser, signInUser };
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
