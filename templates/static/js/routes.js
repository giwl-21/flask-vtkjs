import React from 'react';
import { HashRouter, Route, hashHistory } from 'react-router-dom';
import Example from './components/Layout-Button';
// import more components
export default (
    <HashRouter history={hashHistory}>
     <div>
      <Route path='/' component={Example} />
     </div>
    </HashRouter>
);