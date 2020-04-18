import React from 'react';
import ReactDOM from 'react-dom';
import Map from './map'
import Left from './dashBroadLeft';
import Right from './dashBroadRight';


ReactDOM.render(
  <React.StrictMode>
    <Left />
    <Map />
    <Right/>
  </React.StrictMode>,
  document.getElementById('root')
);
