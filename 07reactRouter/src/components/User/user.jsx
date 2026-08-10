import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const {userid} = useParams()
    return (
        <div className='bg-orange-600 text-white text-3xl align-center justify-center flex text-bold font-poppins p-4'>
            User : {userid}
        </div>
    );
}

export default User;
