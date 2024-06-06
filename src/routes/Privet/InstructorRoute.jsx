import React from 'react';
import { useUser } from '../../hooks/useUser';
import { Navigate} from 'react-router-dom';

const salonRoute = ({ children }) => {
    const { currentUser } = useUser();
   
    if (!currentUser ||  currentUser.role !== 'salon') {
        return <Navigate to="/dashboard" />
    }


    return children;
};

export default salonRoute;