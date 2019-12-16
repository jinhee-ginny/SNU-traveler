import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FlyToInterpolator} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css'
import {Paper} from '@material-ui/core'

const cityList = [
  { name: 'New York', location: [40.7128, -74.0060] },
  { name: '할리스', location: [37.564431, 126.986591] },
  { name: '세븐일레븐', location: [37.565188, 126.983238] },
  { name: '파리바게트', location: [37.564869, 126.984450] },
  { name: '스타벅스', location: [37.562003, 126.985829] }
];



const Mapbox = () => {
  
  const MAP_TOKEN = 'pk.eyJ1IjoiY2FzZS1raW0iLCJhIjoiY2s0OG85Nms1MDRjajNubXRka3l3NWsxNCJ9.JF7k8P3HwvDTMxyLE1hfjQ';
  const [ viewport, setViewport ] = useState({
    latitude: 37.532600,
    longitude: 127.024612,
    width: '100vw',
    height: '100vh',
    zoom: 2
  });
  
  useEffect(() => {
    const mapResizeEvent = _.throttle(function() {
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
            cityList.map((store, i) => (
            <Marker
              key={i}
              latitude={store.location[0]}
              longitude={store.location[1]}
            >
            <button
              className="btn-marker"
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
              <div>{selectedCity.name}</div>
            </Popup>
            )
          }
        </ReactMapGL>
    </div>
  );
};

export default Mapbox;
