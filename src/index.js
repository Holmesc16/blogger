import React from 'react'
import reactDOM from 'react-dom'
import CommentDetail from './components/CommentDetail'
import ApprovalCard from './components/ApprovalCard'
import faker from 'faker'

const time = new Date().toDateString()

const App = () => {
    return (
        <div className="ui container comments">
       <ApprovalCard successButtonText="Approve" denyButtonText="Reject">
          <CommentDetail author={faker.name.findName()} time={time} comments={faker.lorem.word()}/>
        </ApprovalCard>
        <ApprovalCard successButtonText="Approve" denyButtonText="Reject">
          <CommentDetail author={faker.name.findName()} time={time} comments={faker.lorem.word()}/>
        </ApprovalCard>
        <ApprovalCard successButtonText="Approve" denyButtonText="Reject">
          <CommentDetail author={faker.name.findName()} time={time} comments={faker.lorem.word()}/>
        </ApprovalCard>
        </div>
         
    )
}

reactDOM.render(
    <App />, document.querySelector('#root')
)