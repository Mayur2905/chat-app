import React from 'react'
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PublicRoute = ({children, ...routProps}) => {
    const profile = useProfile();

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
