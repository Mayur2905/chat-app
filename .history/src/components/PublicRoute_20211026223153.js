import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { ProfileContext } from '../context/profile.context';

function PublicRoute({ children, ...routeProps }) {
  const { profile, isLoading } = useContext(ProfileContext);

  if (isLoading && !profile) {
    return (
      <Container>
        <Loader center vertical content="loading" size="md" speed="slow" />
      </Container>
    );
  }

  if (profile && !isLoading) {
    return <Redirect to="/" />;
  }
  return <Route {...routeProps}>{children}</Route>;
}

export default PublicRoute;