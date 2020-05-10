import React, { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup, NavigationControl, FlyToInterpolator} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import './styles.css'
import {Container, Typography} from '@material-ui/core'
import {throttle} from 'lodash';
import SignInDialog from '../SignInDialog';
import SignUpDialog from '../SignUpDialog';

import Logo1 from "../../img/design/page1/Logo1.png"
import Logo2 from "../../img/design/page1/Logo2.png"

import searchtext from "../../img/design/page1/search-text.png"
import searchbar from "../../img/design/page1/search-bar.png"

import level1 from "../../img/design/page1/level1.png"
import level2 from "../../img/design/page1/level2.png"
import level3 from "../../img/design/page1/level3.png"
import level4 from "../../img/design/page1/level4.png"
import level5 from "../../img/design/page1/level5.png"




import './EmptyMapbox.css'

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
                Human - Library
                </Typography>
            </Container>
        </div> */}
    </div>
  );
};

export default EmptyMapbox;
