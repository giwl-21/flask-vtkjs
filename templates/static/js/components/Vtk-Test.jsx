import { Component } from 'react';
import { importAndMountVTK } from '../vtk/vtk-volume-render-react';

export default class VTIViewer extends Component{
    // Takes in path and contaienr prop (Later will take vti-blob prop)
    render(){
        importAndMountVTK(this.props.path, this.props.container);
        return(null);
    }
}