import React                 from 'react';
import ReactDOM              from 'react-dom';
import App                   from './App';
import { Provider }          from 'react-redux';
import { createStore }       from 'redux';
import appReducer            from './reducers/appReducer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(appReducer)

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
