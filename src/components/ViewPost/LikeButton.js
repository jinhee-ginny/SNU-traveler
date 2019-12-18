import React, { Component } from 'react';
// import './LikeStyle.css'
import { Button } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite';

class LikeButton extends Component {
    constructor() {
      super();
      this.state = {
        liked: false
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState({
        liked: !this.state.liked
      });
    }

    render() {
      const text = this.state.liked ? 'liked' : 'haven\'t liked';
      const label = this.state.liked ? 'Unlike' : 'Like'
      return (
        <div className="customContainer">
          <Button variant="contained" color = "secondary" className="btn btn-primary" onClick={this.handleClick} startIcon = {<FavoriteIcon/>}>
            {label}</Button>
        </div>
      );
    }
  }

export default LikeButton;
