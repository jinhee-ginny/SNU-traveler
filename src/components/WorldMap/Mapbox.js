import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css'
import {Container, Typography, Button} from '@material-ui/core'
import {throttle} from 'lodash';
//여기서부터 getPost까지는 우영씨가 짠 파이어베이스코드인데, 일단 참고할려고 긁어옴.
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

firebase.analytics();

//connect to database
const getPost = () => {
  const dbRefObject = firebase.database().ref().child('postlist-seoul');
  dbRefObject.on('value', snap => alert(snap.val()));
}

const cityList = [
  { name: 'America', location: [37.0902, -95.7129], picture: "https://image.freepik.com/free-photo/new-york-city-skyline_119101-67.jpg"},
  { name: 'China', location: [35.8617, 104.1954], picture: "https://image.freepik.com/free-photo/water-famous-architecture-finance-shanghai-tower_1417-1120.jpg" },
  { name: 'France', location: [48.8566, 2.3522], picture: "https://image.freepik.com/free-photo/paris-eiffel-tower-skyline-aerial-france_79295-14918.jpg"},
  { name: 'Korea', location: [37.5665, 126.9780], picture: "https://image.freepik.com/free-photo/sunrise-bukchon-hanok-village-seoul_40171-5.jpg" }
]; //지도 좌표는 이렇게 찍어봤는데 큰 지도에서는 오차가 좀 있더라고요. 어찌하면 좋을까요.

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
        <Typography component="h1" variant="h5" align="center" color="textPrimary">
        Click your tour country.
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
            >
              <div><b>{selectedCity.name}</b>{' '}    |
                <Button
                  color = "primary"
                  href = {`../posts/${selectedCity.name}`} //여기서 각 포스트 게시판 별로 링크를 달아줄 수 있을까요.
                >
                  Posts
                </Button>
  
              </div>
              <div>
                <img width={240} src={selectedCity.picture}></img>
              </div>
            </Popup>
          )
        }
      </ReactMapGL>
    </div>
  );
};

export default Mapbox;
