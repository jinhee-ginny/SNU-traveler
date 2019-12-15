import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Container} from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
}));

const WorldMap = () => {
    return(
        <React.Fragment>
            <h1>Click your city</h1>
              <Container>
                  <div className>
                    <Button variant="contained" color="primary" href="../posts"> Asia </Button>
                    <Button variant="contained" color="primary"> Europe </Button>
                    <Button variant="contained" color="primary"> Africa </Button>
                    <Button variant="contained" color="primary"> North America </Button>
                    <Button variant="contained" color="primary"> South America </Button>
                    <Button variant="contained" color="primary"> Oceania </Button>
                  </div>             
                  <img src="https://image.freepik.com/free-vector/world-map-isolated_98292-4295.jpg" alt="세계지도"/>            
              </Container>
        </React.Fragment>
    )
}
export default withStyles(useStyles) (WorldMap);