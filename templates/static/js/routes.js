import React from 'react';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import Home from './components/Home';
import Mother from './components/Mother';
import VTIViewer from './components/Vtk-Test';
// import more components
export default (
    <BrowserRouter history={hashHistory}>
     <div>
      <Route exact path='/' component={Home} />
      <Route path='/mother' component={Mother}/>
      <Route path='/3d_viewer' render={() => (
        <VTIViewer path={document.querySelector("#vti-path-holder").getAttribute("value")} 
            container={document.querySelector("#container")}/>
    )}/>
      
     </div>
    </BrowserRouter>
);