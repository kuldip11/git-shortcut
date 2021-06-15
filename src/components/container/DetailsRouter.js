import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Repo from "./Repo";
import Issues from "./Issues";
import Wish from "./Wish";
import "../../styles/router.css";
export const wishListContext = createContext();
const DetailsRouter = ({ repoUrl }) => {
  const [wishList, setWishList] = useState([]);
  
  
  return (
    <Router>
      <div>
        <div className="nave">
          <Link className="link" to="/">
            Repositories
          </Link>
          <Link className="link" to="/issues">
            Issues
          </Link>
          <Link className="link" to="/wishlist">
            Wishlist
          </Link>
        </div>
        <wishListContext.Provider value={[wishList, setWishList]}>
          <Switch>
            <Route path="/issues">
              <Issues />
            </Route>

            <Route path="/wishlist">
              <Wish />
            </Route>

            <Route path="/">
              <Repo repoUrl={repoUrl} />
            </Route>
          </Switch>
        </wishListContext.Provider>
      </div>
    </Router>
  );
};

export default DetailsRouter;
