import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

export const NewsContext = createContext(null);

const AuthContext = ({ children }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  const Authentication = { news };
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
