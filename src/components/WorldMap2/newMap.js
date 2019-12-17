import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FlyToInterpolator} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css'
import {Container, Typography} from '@material-ui/core'
import {throttle} from 'lodash';

const cityList = [
  { name: 'New York', location: [40.7128, -74.0060] },
  { name: 'Beijing', location: [39.9042, 116.4074] },
  { name: 'Paris', location: [48.8566, 2.3522] },
  { name: 'Cairo', location: [30.0444, 31.2357] },
  { name: 'Seoul', location: [37.5665, 126.9780] }
];

const Mapbox = () => {
  
  const MAP_TOKEN = 'pk.eyJ1IjoiY2FzZS1raW0iLCJhIjoiY2s0OG85Nms1MDRjajNubXRka3l3NWsxNCJ9.JF7k8P3HwvDTMxyLE1hfjQ';
  const [ viewport, setViewport ] = useState({
    latitude: 37.532600,
    longitude: 127.024612,
    width: '100%',
    height: '100%',
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

  const [selectedCity, setSelectedCity] = useState('');
  
  return (        
    <div className="Mapbox">
      <div>
          <Container maxWidth={false}>
            <Typography component="h1" variant="h5" align="left" color="textPrimary">
            Click your city
            </Typography>
          </Container>
      </div>
        <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport) => {
        setViewport(viewport);
        }}
        >
          
          <div className="navi-control">
            <NavigationControl/>
          </div>
          {
            cityList.map((city, i) => (
            <Marker
              key={i}
              latitude={city.location[0]}
              longitude={city.location[1]}
            >
            <button
              className="btn-marker"
              onClick = {() => setSelectedCity(city)}
            />
            </Marker>
            ))
          }
          {
            selectedCity && (
              <Popup
                offsetLeft={10}
                latitude={selectedCity.location[0]}
                longitude={selectedCity.location[1]}
                onClose={() => setSelectedCity('')}
              >
                <div>{selectedCity.name}{' '}|{' '}
                  <a
                    target ="_new"
                    href = "../posts"
                  >
                    Posts
                  </a>
                </div>
                <div>
                  <img width={240} src='https://image.freepik.com/free-photo/beautiful-architecture-building-cityscape-seoul-city_74190-3218.jpg'></img>
                </div>
              </Popup>
            )
          }
        </ReactMapGL>
    </div>
  );
};

export default Mapbox;
