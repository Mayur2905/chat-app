import React from 'react'
import { Redirect, Route } from 'react-router';
import { Container, Loader } from 'rsuite';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({children, ...routProps}) => {
    const {profile, isLoding }= useProfile();
    
    if(isLoding && !profile){
        return<Container>
            <Loader center vertical size ="md" content="Loading" speed="slow" />
    </Container>
    }

   if(!profile && isLoding){
       return<Redirect to="/src/pages/SignIn.js"/>
   }

    return (
        <Route {...routProps}>
            {children};
        </Route>
    )
};

export default PrivateRoute;
