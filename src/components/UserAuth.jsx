import React from 'react'
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UserAuth = ({children}) => {
 
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(sessionStorage.getItem('user'))
    )

    if(currentUser !== null){
        return children;
    }else{
        Swal.fire({
            icon:'error',
            title: 'Not Allowed',
            text: 'Login First to access this page'
        });
        return <Navigate to='/login'/>
    }

    return (
    <div>UserAuth</div>
  )
}

export default UserAuth;