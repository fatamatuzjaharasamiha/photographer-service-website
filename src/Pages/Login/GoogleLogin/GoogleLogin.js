import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <button className='btn btn-dark m-2 mx-auto shadow-lg' onClick={() => signInWithGoogle()}>Google sign in</button>
        </div>
    );
};

export default GoogleLogin;