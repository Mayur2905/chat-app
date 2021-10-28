import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { ProfileContext } from '../context/profile.context';

function PrivateRoute({ children, ...routeProps }) {
  const { profile, isLoading } = useContext(ProfileContext);

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical content="loading" size="md" speed="slow" />
      </Container>
    );
  }

  if (!profile && !isLoading) {
    return <Redirect to="/sigin" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PrivateRoute;