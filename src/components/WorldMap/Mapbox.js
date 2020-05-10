import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css'
import {Container, Typography, Button} from '@material-ui/core'
import {throttle} from 'lodash';
import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';

import Logo1 from "../../img/design/page1/Logo1.png"
import Logo2 from "../../img/design/page1/Logo2.png"

import searchtext from "../../img/design/page1/search-text.png"
import searchbar from "../../img/design/page1/search-bar.png"

import level1 from "../../img/design/page1/level1.png"
import level2 from "../../img/design/page1/level2.png"
import level3 from "../../img/design/page1/level3.png"
import level4 from "../../img/design/page1/level4.png"
import level5 from "../../img/design/page1/level5.png"

firebase.analytics();

//connect to database
const getPost = () => {
  const dbRefObject = firebase.database().ref().child('postlist-seoul');
  dbRefObject.on('value', snap => alert(snap.val()));
}

// const cityList = [
//   { name: 'America', location: [37.0902, -95.7129], picture: "https://image.freepik.com/free-photo/new-york-city-skyline_119101-67.jpg"},
//   { name: 'China', location: [35.8617, 104.1954], picture: "https://image.freepik.com/free-photo/water-famous-architecture-finance-shanghai-tower_1417-1120.jpg" },
//   { name: 'France', location: [48.8566, 2.3522], picture: "https://image.freepik.com/free-photo/paris-eiffel-tower-skyline-aerial-france_79295-14918.jpg"},
//   { name: 'Korea', location: [37.5665, 126.9780], picture: "https://image.freepik.com/free-photo/sunrise-bukchon-hanok-village-seoul_40171-5.jpg" }
// ]; //지도 좌표는 이렇게 찍어봤는데 큰 지도에서는 오차가 좀 있더라고요. 어찌하면 좋을까요.

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
      
      <div className="logos">
        <img src={Logo2} alt="banner-image" className="logo2"/>
        <img src={Logo1} alt="banner-image" className="logo1"/>
      </div>
      
      <div class="mainpage">
        <img src={searchtext} alt="banner-image" className="search-text"/>
        <img src={searchbar} alt="banner-image" className="search-bar"/>
        <div className="level-123">
          <a href="/posts/level1" target="_blank"><img src={level1} className="level1"/></a>    
          <a href="/posts/level2" target="_blank"><img src={level2} className="level2"/></a>
          <a href="/posts/level3" target="_blank"><img src={level3} className="level3"/></a> 
        </div>
        <div className="level-45">
          <a href="/posts/level4" target="_blank"><img src={level4} className="level4"/></a>
          <a href="/posts/level5" target="_blank"><img src={level5} className="level5"/></a>
        </div>
      </div>




      {/* <div>
      <Container maxWidth={false}>
        <Typography component="h1" variant="h5" align="center" color="textPrimary">
        Click your tour country.
        </Typography>
      </Container>
      </div> */}
      {/* <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAP_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
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
      </ReactMapGL> */}
    </div>
  );
};

export default Mapbox;
