import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/cutom-button.component';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
        // alert(`${this.state.email} ${this.state.password}`)
    }
    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
        console.log(this.state.name + ' + ' + this.state.password)
    }
    render() {
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
                        placeholder='Enter Your Email'
                        value={this.state.email}
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        placeholder='Enter Your Password'
                        value={this.state.password}
                        required
                    />
                    <CustomButton type='submit'>
                        Login
                    </CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn;