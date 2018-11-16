import React from 'react';
import ReactDOM from 'react-dom';
import NewsApp from './client/NewsApp.jsx';
import { HashRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './redux/reducers/allReducers.js';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <div>
      <Route exact path='/' component={NewsApp}/>
    </div>
  </HashRouter>
  </Provider>
  , document.getElementById('app')
);
