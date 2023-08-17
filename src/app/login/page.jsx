import Link from 'next/link';
import React from 'react';
import SignIn from '@/Components/auth/SignIn';


const Login = ({ searchParams: { callbackUrl } }) => {
    console.log(callbackUrl, 'callbackUrl')
    return (
        <div>
            <SignIn callbackUrl={callbackUrl || "/dashboard"} />
        </div>
    );
};

export default Login;