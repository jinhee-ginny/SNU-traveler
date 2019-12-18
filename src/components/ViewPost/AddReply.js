import React, { Component, useState, useEffect } from 'react';

class PostReply {
    constructor(userName, context, createdAt) {
        this.userName = userName;
        this.context = context;
        this.createdAt = createdAt
    }

    print() {
        return(
            <p>
                <span style={{ marginRight: '5px', fontWeight:'bolder'}}>{this.userName}</span>
                <span style={{wordBreak:"break-all"}}>{this.context}</span>
                <span style={{fontWeight:"lighter"}}>보낸시각: {this.createdAt}</span>
            </p>
        )
    }
}

const Reply = () => {
    const [newReply, setNewReply] = useState('');
    const [replyList, setReplyList] = useState('');
    useEffect(() => {
        fetch(`${API_ENDPOINT}/chats?order=desc`)
        .then(res => res.json())
        .then((replys) => {
            console.log(replys);
            setReplyList(
                replys.map((reply) => new PostReply(reply.userName, reply.context, reply.createdAt))
            )
        })
    })

    const writeReply = (e) => {
        e.preventDefault();
        fetch(`${REPLY_POINT}`, {
            method: 'POST',
        })
        .then(res => res.json())
        .then((message) => {
            console.log(message)
            setNewReply(
                fetch(`${API_ENDPOINT}/chats?order=desc`)
                .then(res => res.json())
                .then(/*(replyList) =>{*/
                    fetch(`${API_ENDPOINT}/chats?order=desc`)
                    .then(res => res.json())
                    .then((replys) => {
                        console.log(replys);
                        setReplyList(
                            replys.map((message) => new PostReply(message.userName, message.context, message.createdAt))
                        )
                    })
                /*}*/)
            )
        })
        .catch((err)=>console.error(err))
    }

    return(
        <div>
            <h5>Replies</h5>
            <div>
                {replyList.map((reply)=>reply.print())}
            </div>
            <div>
                <Paper className = "new_reply">
                    <FormControl>                        
                        <p>
                            <InputLabel htmlFor="component-simple">새 댓글 등록</InputLabel><Input id="component-simple"></Input>
                            <Button variant="contained" color="primary" onChange={writeReply}>등록</Button>
                        </p>            
                    </FormControl>
                </Paper> 
            </div>
        </div>
    )

}

export default Reply;