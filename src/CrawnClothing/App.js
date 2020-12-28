import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import AboutUs from './pages/about-page/about-us.component';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/shop' component={ShopPage} />
                <Route exact path='/jacket' component={AboutUs} />
            </Switch>
        </Router>
    )
}

export default App;