import React from 'react';
import Auth from './useAuth';

const Loggin = () => {
    const auth= Auth();
    const handleSignIn =()=> {
        auth.signInWithGoogle()
        .then(res => {
            window.location.pathname ='/review';
        })
    }
    const handleSignOut= () => {
        auth.signOut()
        .then(res=>{
            window.location.pathname ='/';
        });

    }
    return (
        <div>
            <h1>Join the group.</h1>
           { 
           auth.user ? <button onClick={handleSignOut}> Sign Out</button>:
           <button onClick={handleSignIn}>Sign in with google</button>
           }
        </div>
    );
};

export default Loggin;