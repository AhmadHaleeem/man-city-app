import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({ user, component: Comp, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        restricted ? (
          user ? (
            <Redirect to="/dashboard" />
          ) : (
            <Comp {...props} user={user} />
          )
        ) : (
          <Comp {...props} user={user} />
        )
      }
    />
  );
};

export default PublicRoutes;
