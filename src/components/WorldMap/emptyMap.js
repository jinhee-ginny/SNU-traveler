import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FlyToInterpolator} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css'
import {Container, Typography} from '@material-ui/core'
import {throttle} from 'lodash';
import SignInDialog from '../SignInDialog';
import SignUpDialog from '../SignUpDialog';

const EmptyMapbox = () => {
  
  const MAP_TOKEN = 'pk.eyJ1IjoiY2FzZS1raW0iLCJhIjoiY2s0OG85Nms1MDRjajNubXRka3l3NWsxNCJ9.JF7k8P3HwvDTMxyLE1hfjQ';
  const [ viewport, setViewport ] = useState({
    latitude: 37.532600,
    longitude: 127.024612,
    width: '100vw',
    height: '100vh',
    zoom: 2
  });

  useEffect(() => {
    const mapResizeEvent = throttle(() => {
    setViewport(Object.assign({}, {
      ...viewport,
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`
    }));
    }, 2000);
    window.addEventListener('resize', mapResizeEvent);
    return () => {
      window.removeEventListener('resize', mapResizeEvent);
    }
  }, [ viewport ]);

  return (        
    <div className="Mapbox">
        <div>
            <Container maxWidth={false}>
                <Typography component="h1" variant="h5" align="left" color="textPrimary">
                SNU - Traveler: Final Project For SNU-Web Programming Course
                </Typography>
            </Container>
        </div>
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={MAP_TOKEN}
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={(viewport) => {
            setViewport(viewport);
            }}
        >          
          <div className="navi-control">
            <NavigationControl/>
          </div>
        </ReactMapGL>
    </div>
  );
};

export default EmptyMapbox;
