import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { ContactUs } from './pages/contact-us/contact-us.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            currentUser: null
        }
    }

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            createUserProfileDocument(user);
        })
    }

    unsubscribeFromAuth = null;

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <Router>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route exact path='/sign-in' component={SignInAndSignUpPage} />
                    <Route exact path='/shop' component={ShopPage} />
                    <Route exact path='/contact' component={ContactUs} />
                </Switch>
            </Router>
        )
    }
}

export default App;