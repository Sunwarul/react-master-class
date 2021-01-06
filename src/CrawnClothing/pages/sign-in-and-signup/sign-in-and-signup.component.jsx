import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-and-signup.styles.scss';

export const SignInAndSignUpPage = () => (
    <div className='container'>
        <div className='row'>
            <div className='sign-in col-6'>
                <SignIn />
            </div>
            <div className='sign-up col-6'>
                <SignUp />
            </div>
        </div>
    </div>
)