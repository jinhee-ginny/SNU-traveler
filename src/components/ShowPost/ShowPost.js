import React, { Component } from 'react';
import moment from 'moment';
 
import renderHTML from 'react-render-html';
import {Container, Paper, Divider, Textfield, Input, FormControl, Button, InputLabel, Typography} from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';

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

const showPost = (props) => {
    const {title, author, body, category, datestamp, Reply} = this.props.post;

    return(
        <React.Fragment>
            <main>
                <div>
                    <Container maxWidth={false}>
                        <Typography component="h1" variant="h5">
                            새 글 쓰기
                        </Typography>
                    </Container>
                </div>
                <Container>
                    <Paper className="single_post"> 
                        <h4>Title: {title} </h4>
                        <p><b>Autor:</b> {author}</p>                               
                        <Divider light />
                        <p><b>Category:</b> {category} </p>
                        <Divider light />
                        <p><b>Created At: </b> {moment(datestamp).format('YYYY.MM.DD')} </p>
                        <Divider light />
                    </Paper>
                    <Paper>
                        <body>{renderHTML(body)}</body>
                    </Paper>
                    <Button onClick = {this.Reply}>댓글창 보기</Button>                       
                </Container>
            </main>
        </React.Fragment>
    )
}

export default withStyles(styles) (showPost);