import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const PrivateRoute = ({children}) => {
    const [user, loading] = useAuthState(auth)
    console.log(user)

    const location = useLocation()

    if(loading){
        return <p>User loading</p>
    }

    if(!user){
       return <Navigate to="/log-in" state={{from: location}} replace />
    }

    return ( children );
};

export default PrivateRoute;