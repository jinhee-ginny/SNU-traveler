import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';
 
import renderHTML from 'react-render-html';
import {IconButton, TextField, CardHeader, CardMedia, CardContent, CardActions, Avatar, Container, Paper, Divider, Textfield, Input, FormControl, Button, InputLabel, Typography, Grid, Card, OutlinedInput} from '@material-ui/core/';
import { makeStyles, withStyles} from '@material-ui/styles';
import {ExpandMoreIcon, EditIcon, MoreVertIcon, FavoriteIcon, ShareIcon} from '@material-ui/icons/MoreVert'
import clsx from 'clsx';
import LikeButton from './LikeButton';
import  firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import {getPost, postKey} from '../PostListContent'

const styles = (theme) => ({
    postHeader: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(2, 0, 2),
    },
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
    },
    enterReply:{

    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
})

class Reply extends Component {
}

//key를 다르게 받아서 가져올지, 

const ShowPost = (props) => {
  const { classes, postKey } = props;
  console.log(postKey);
  const [favorite, setFavorite] = useState(0);
  const [newReply, setNewReply] = useState('')
  const [replyList, setReplyLIst] = useState('')

	const Like = (e) => {

	}

	const AddReply = (e) => {
			e.preventdefault();
			if(!newReply) {
					return alert ("Type your reply!");
			}
	}

	useEffect(() => {

	})

	return(
		<React.Fragment>
			<main style={{align: 'center'}}>
			<Container maxWidth={false} className={classes.postHeader}>
				<Typography component="h1" variant="h5" align="left" color="textPrimary">
					여행 게시판
				</Typography>
			</Container>
			<Container className={classes.card}>
				<Card align ='center'>
					<CardHeader
							title = "{postKey.title}"
							subheader="작성자, 날짜"
					/>
					<CardMedia
							className = {classes.media}
							image = "https://image.freepik.com/free-photo/beautiful-architecture-building-cityscape-seoul-city_74190-3218.jpg"
							title = "Seoul"
					/>
					<Divider light/>
					<CardContent align = 'left'>
							서울서울
					</CardContent>
					<Divider light/>
					<CardContent align = 'right'>
						{postKey.liked}
						<LikeButton onClick = {()=>setFavorite(favorite+1)}/>
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
							
			</Container>
			<Container>
					<form onSubmit={AddReply} align = 'center'>
							<p><TextField type = "text" placeholder = "댓글을 남겨주세요." onChange={(e) => setNewReply(e.target.value)} style={{width:'91%'}}/>
							{'   '}
							<Button type = "submit" variant="contained" color="primary" style={{width:'8.5%'}}>등록</Button>
							</p>
					</form>
			</Container>
			</main>
		</React.Fragment>
	)
}

export default withStyles(styles) (ShowPost);