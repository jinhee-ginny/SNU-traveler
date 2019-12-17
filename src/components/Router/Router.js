import React, { Component } from 'react'

import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route } from "react-router-dom";

import HomeContent from '../HomeContent';
import PostListContent from '../PostListContent'
import NotFoundContent from '../NotFoundContent';

import ShowPost from '../ShowPost/ShowPostStyle';
import ShowMap from '../WorldMap';
import Mapbox from '../WorldMap2';

import MapContent from '../WorldMap2'



class Router extends Component {
  render() {
    // Properties
    const { user } = this.props;

    return (
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <Switch>
          <Route path="/" exact>
            <HomeContent user={user} />
          </Route>

          <Route path="/posts" exact>
            <PostListContent user={user} />
          </Route>

          <Route path="/worldmap">
            <ShowMap user={user}/>
          </Route>

          <Route path="/viewpost">
            <ShowPost user={user}/>
          </Route>

          <Route path = "/newmap">
            <Mapbox/>
          </Route>

          <Route path = "/mapcontent">
            <MapContent user = {user}/>
          </Route>          

          <Route>
            <NotFoundContent />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

Router.propTypes = {
  // Properties
  user: PropTypes.object
};

export default Router;
