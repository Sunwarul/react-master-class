import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Header } from './components/header/header.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-signup/sign-in-and-signup.component';
import { ContactUs } from './pages/contact-us/contact-us.component';

const App = () => {
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

export default App;