import React from "react";
import { Route, Redirect } from "react-router-dom";
import cache from "../Helpers/cache";

const isAuth = () => {
  if(cache.getItem("user") !== null){
    return true;
  }
  return false;
};

const PrivateRoute = ({component : Component, ...rest}) => {
  return(
    <Route
      {...rest}
      render={props =>
      isAuth() ? (
        <Component {...props} />
      ): (
        <Redirect
          to="/"
        />
      )}
    />
  );
}

export default PrivateRoute;