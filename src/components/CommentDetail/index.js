import React from 'react'
import faker from 'faker'
import { Comment } from 'semantic-ui-react'

const CommentDetail = (props) => {
    return (
        <Comment.Group>
            <Comment>
            <Comment.Avatar src={faker.image.avatar()} />
            <Comment.Content>
            <Comment.Author as='a'>{props.author}</Comment.Author>
            <Comment.Metadata>
                <div>{props.time}</div>
            </Comment.Metadata>
            <Comment.Text>{props.comments}</Comment.Text>
            </Comment.Content>
            </Comment> 
        </Comment.Group>   
    )
}

 export default CommentDetail