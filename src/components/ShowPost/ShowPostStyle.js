import React, { Component } from 'react';
import moment from 'moment';
 
import renderHTML from 'react-render-html';
import {IconButton, CardHeader, CardMedia, CardContent, CardActions, Avatar, Container, Paper, Divider, Textfield, Input, FormControl, Button, InputLabel, Typography, Grid, Card, OutlinedInput} from '@material-ui/core/';
import { makeStyles, withStyles} from '@material-ui/styles';
import { red } from '@material-ui/core/colors'
import {ExpandMoreIcon, MoreVertIcon, FavoriteIcon, ShareIcon} from '@material-ui/icons/MoreVert'
import clsx from 'clsx';

const styles = (theme) => ({
    title:{
        padding: '10px',
    },
    card:{
        height:'100%',
        display: 'flex',
        flexDirection: 'column',
    },
    reply:{
        display:'flex',
        flexDirection:'column'
    }
})

const ShowPost = (props) => {
    const {classes} = props;
    return(
        <React.Fragment>
            <main>
                <Container align = "center" maxWidth={false}>
                    <Typography component="h1" variant="h5">
                        게시판 이름을 여기다 넣으면 좋을까요, 아님 아예 빼고 공백만 두는게 깔끔하려나
                    </Typography>
                </Container>
                <Container className={classes.card}>
                <Card align ='center'>
                    <Paper>
                        <CardHeader
                            title = "정말 장소만 적는 제목이 여기 들어가고 e.g. 남산타워"
                            subheader="한줄 정리 등이 들어가면 더 좋지 않으까요?"
                        />
                        <CardHeader align='right'
                            subheader = "작성자, 날짜"
                        />
                        <CardMedia
                            image = "https://image.freepik.com/free-photo/beautiful-architecture-building-cityscape-seoul-city_74190-3218.jpg"
                            title = "Seoul"
                        />
                        <img src = "https://image.freepik.com/free-photo/beautiful-architecture-building-cityscape-seoul-city_74190-3218.jpg"/>                        
                    </Paper>
                    <Divider light/>
                    <CardContent align = 'left'>
                        서울서울
                    </CardContent>
                    <Divider light/>
                    <CardContent align = 'left'>
                        <b>태그: </b> 여기다가 내용.
                    </CardContent>
                </Card>
                </Container>
                <Container className={classes.reply}>
                    <h4>댓글</h4>
                    <Paper>
                        <Divider light/>
                        <div>
                        <span><b>이름:  </b></span>
                        <span>내용 내용</span>
                        <span style={{float:'right'}}>날짜</span>
                        </div>
                        <Divider light/>
                        <div>
                        <span><b>이름:  </b></span>
                        <span>내용 내용</span>
                        <span style={{float:'right'}}>날짜</span>                      
                        </div>
                    </Paper>
                    <Divider/>
                    <FormControl fullWidth>
                        <InputLabel htmlFor="component-simple">새 댓글등록</InputLabel>
                        <p><Input></Input><Button variant="contained" color="primary">Submit</Button></p>
                                    
                    </FormControl>  
                </Container>
            </main>
        </React.Fragment>
    )
}

export default withStyles(styles) (ShowPost);