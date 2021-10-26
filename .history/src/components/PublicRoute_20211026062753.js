import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({children, ...routProps}) => {
    const {profile,isLoding} = useProfile();

    if(isLoding && !profile){
        return<Container>
            <Loader center vertical size ="md" content="Loading" speed="slow" />
    </Container>
    }

   if(!profile && isLoding){
       return<Redirect to="/signin"/>
   }

   if(profile){
       return<Redirect to="/Home"/>
   }

    return (
        <Route {...routProps}>
            {children};
        </Route>
    )
};

export default PublicRoute;
