import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({ user, component: Comp, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (user ? <Comp {...props} user={user} /> : <Redirect to="/signin" />)}
    />
  );
};

export default PrivateRoutes;
