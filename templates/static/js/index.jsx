import React from 'react';
import ReactDOM from 'react-dom';
//import Home from "./components/Home";
//import VTKTest from './components/Vtk-Test';
//import Controller from './components/controller';
import {importVTK} from './vtk/vtk-gaussian-render';

//var controls = <Controller/>;
//ReactDOM.render(controls, document.getElementById("content"));

var path = document.getElementById("vti-path-holder").getAttribute("value");
importVTK(path);
