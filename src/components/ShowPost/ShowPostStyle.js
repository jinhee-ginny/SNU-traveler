import React, { Component } from 'react';
import moment from 'moment';
 
import renderHTML from 'react-render-html';
import {Container, Paper, Divider, Textfield, Input, FormControl, Button, InputLabel, Typography} from '@material-ui/core/';
import { withStyles } from '@material-ui/styles';

const styles = (theme) => ({
    Paper: {
        paddingTop: theme.spacing(4),
    }
})

const showPost = () => {
    return(
        <React.Fragment>
            <main>
                <div>
                    <Container maxWidth={false}>
                        <Typography component="h1" variant="h5">
                            게시판 이름을 여기다 넣으면 좋을까요
                        </Typography>
                    </Container>
                </div>
                <Container>
                    <Paper className="single_post"> 
                        <Divider light/>
                        <p><b>Title:</b> 여기에 제목</p>
                        <Divider light />
                        <p><b>Autor:</b></p>                               
                        <Divider light />
                        <p><b>Category:</b> 여기 아마 이제 뭐 음식, 관광지 이런 내요응ㄹ 넣으면 어떨까요</p>
                        <Divider light />
                        <p><b>Created At: </b></p>
                        <Divider light />
                    </Paper>
                </Container>
                <Divider variant="middle"/>
                <Container>
                    <Paper> 여기가 나으려나 </Paper>
                    <Button>댓글창 보기</Button>    
                </Container>
            </main>
        </React.Fragment>
    )
}

export default withStyles(styles) (showPost);