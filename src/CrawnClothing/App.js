import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/about-page/about-us.component';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/hats' component={AboutUs} />
                <Route exact path='/shop' component={ShopPage} />
            </Switch>
        </Router>
    )
}

export default App;