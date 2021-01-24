import React from 'react';
import ReactDOM from 'react-dom'
import App from './CrawnClothing/App';
import { Provider } from 'react-redux';
import store from './CrawnClothing/redux/store';

// import App from './MonsterRolodex/App';

/**
 * Render the app you need here
 * Just import the ./AppName/App file and change the component name in the render method.
 */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));