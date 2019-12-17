
import React, { Component } from 'react'
import { string } from 'prop-types'

import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'


import { withStyles } from '@material-ui/core/styles';


//
import EmptyState from '../EmptyState';
//




const styles = (theme) => ({});

const WritePost = (props) =>{


    return (
      <div>
        <form style={{ padding: 24 }}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="new-diary-name"
                label="제목"
                margin="normal"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="new-diary-description"
                label="글"
                margin="normal"
                multiline
                required
                rows={4}
                rowsMax={100}
              />
            </Grid>
          </Grid>
        </form>
        <Button fullWidth>
            글작성하기
        </Button>
        
        <EmptyState
        button="뒤로가기"
        buttonLink="/posts"
      />
      
      </div>
    )
  
}



export default withStyles(styles)(WritePost);