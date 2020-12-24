import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/about-page/about-us.component';
import { HomePage } from './pages/homepage/homepage.component'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/hats' component={AboutUs} />
            </Switch>
        </Router>
    )
}

export default App;