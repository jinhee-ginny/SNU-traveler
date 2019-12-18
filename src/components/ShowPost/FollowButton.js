import React, {Component} from 'react';
import {Button} from '@material-ui/core'
import AddCircleIcon from '@material-ui/icons/AddCircle';

class FollowButton extends Component {
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
      const label = this.state.liked ? 'Unfollow' : 'Follow'
      return (
        <div className="customContainer">
          <Button variant="contained" color = "secondary" className="btn btn-primary" onClick={this.handleClick} endIcon = {<AddCircleIcon/>}>
            {label}</Button>
        </div>
      );
    }
  }
  
export default FollowButton;