import React, { Component } from 'react';
import { installViewer } from '@ohif/viewer'

const ohifViewerConfig = window.config // or set it here
const containerId = 'ohif'
const componentRenderedOrUpdatedCallback = function() {
   console.log('OHIF Viewer rendered/updated');
};

export default class Home extends Component {



   componentDidMount() {
      installViewer(
         ohifViewerConfig,
         containerId,
         componentRenderedOrUpdatedCallback
      );
   }

   render () {
      //you can render in any element you wish
      <AnyTag id={containerId}/>
   }
}