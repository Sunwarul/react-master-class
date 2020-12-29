import React from 'react'
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';

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
                        value={this.state.email}
                        required
                    />
                    <input type='submit' value='Sign-in' />
                </form>
            </div>
        )
    }
}
export default SignIn;