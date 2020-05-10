import React, { Component } from 'react'

import PropTypes from 'prop-types';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import HomeContent from '../HomeContent';
import PostListContent from '../PostListContent'
import NotFoundContent from '../NotFoundContent';

import ViewPost from '../ViewPost';

import MapContent from '../WorldMap'
import WritePost from '../WritePost';
import MyPage from '../MyPage'

import MyPageEdit from '../MypageEdit'

import LevelListContent from '../LevelListContent'

class Router extends Component {
  render() {
    // Properties
    const { user } = this.props;

    return (
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <main>
          <Switch>
            <Route path="/" exact render={() => (
              <MapContent country="Korea" user={user} />
            )} />

            <Route path="/posts/Korea" exact render={() => (
              <PostListContent country="Korea" user={user} />
            )} />
            <Route path="/posts/America" exact render={() => (
              <PostListContent country="America" user={user} />
            )} />
            <Route path="/posts/China" exact render={() => (
              <PostListContent country="China" user={user} />
            )} />
            <Route path="/posts/France" exact render={() => (
              <PostListContent country="France" user={user} />
            )} />




            <Route path="/posts/level1" exact render={() => (
              <LevelListContent level="level1" user={user} />
            )} />

            <Route path="/posts/level2" exact render={() => (
              <LevelListContent level="level2" user={user} />
            )} />

            <Route path="/posts/level3" exact render={() => (
              <LevelListContent level="level3" user={user} />
            )} />

            <Route path="/posts/level4" exact render={() => (
              <LevelListContent level="level4" user={user} />
            )} />

            <Route path="/posts/level5" exact render={() => (
              <LevelListContent level="level5" user={user} />
            )} />


            <Route path="/mypage" exact render={() => (
              <MyPage user={user} />
            )} />

            <Route path="/mypageedit" exact render={() => (
              <MyPageEdit user={user} />
            )} />

            <Route path="/writepost" exact render={() => (
              <WritePost user={user} />
            )} />            

            {/* <Route path="/writePost" exact component={WritePost} /> */}

            <Route path="/viewpost" exact component={ViewPost} />

            {/* <Route path="/mypage" exact component={MyPage}/> */}

            <Route>
              <NotFoundContent />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

Router.propTypes = {
  // Properties
  user: PropTypes.object
};

export default Router;
