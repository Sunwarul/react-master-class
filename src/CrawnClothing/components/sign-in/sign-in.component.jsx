import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (err) {
            console.error(err);
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
        // console.log(`${name} ${value}`) 
    }
    render() {
        const { email, password } = this.state;
        return (
            <div className='sign-in'>
                <h1>Sign-in</h1>
                <span>Sign-in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        label="Email"
                        placeholder='Email'
                        value={email}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        placeholder='Password'
                        value={password}
                        required
                    />
                    <CustomButton type='submit'>
                        Login
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle}
                        style={{ backgroundColor: '#7296AC' }}
                    >
                        Login with google
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;