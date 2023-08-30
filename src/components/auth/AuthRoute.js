import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getAuthToken } from '../services/authService';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!getAuthToken();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
