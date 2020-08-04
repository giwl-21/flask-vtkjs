import React from 'react';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import Home from './components/Home';
import Mother from './components/Mother';
// import more components
export default (
    <BrowserRouter history={hashHistory}>
     <div>
      <Route exact path='/' component={Home} />
      <Route path='/mother' component={Mother}/>
     </div>
    </BrowserRouter>
);