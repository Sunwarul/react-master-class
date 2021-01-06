import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { ContactUs } from './pages/contact-us/contact-us.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

    componentDidMount() {
        const { setCurrentUser } = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => { })
                })
            }
            setCurrentUser(userAuth);
        })
    }

    unsubscribeFromAuth = null;

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        return (
            <Router>
                <Header />
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

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);