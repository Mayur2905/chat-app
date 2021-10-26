import React from 'react'
import { Redirect, Route } from 'react-router';
import { useProfile } from '../context/profile.context';

const PrivateRoute = ({children, ...routProps}) => {
    const profile = useProfile();

   if(!profile){
       return<Redirect to="/signin"/>
   }

    return (
        <Route {...routProps}>
            {children};
        </Route>
    )
};

export default PrivateRoute;
