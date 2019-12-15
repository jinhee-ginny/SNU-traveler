import React, { Component } from 'react';
import moment from 'moment';
 
import renderHTML from 'react-render-html';
import {Typhography, Container, Paper, Divider, Textfield, Input, FormControl, Button, InputLabel} from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';
import Reply from './AddReply.js'

const styles = (theme) => ({
    Paper: {
        paddingTop: theme.spacing(4),
    }
})

const showPost = (props) => {
    const {title, author, body, category, datestamp, Reply} = this.props.post;

    return(
        <React.Fragment>
            <main>
                <div>
                    <Container maxWidth={false}>
                        <Typhography component="h1" variant="h5">
                            새 글 쓰기
                        </Typhography>
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