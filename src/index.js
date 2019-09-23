import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './reducers'

//Components
import App from './components/App'

const store = createStore(reducer);



document.body.style = 'background: darkseagreen;';

ReactDOM.render(
    <Provider store={store}>
    <App/> 
    </Provider>,document.getElementById('root')
)