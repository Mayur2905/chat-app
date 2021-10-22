import React from 'react'
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children, ...routProps}) => {
    const profile = false;

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
