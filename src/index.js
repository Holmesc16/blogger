import React from 'react'
import reactDOM from 'react-dom'
import CommentDetail from './components/CommentDetail'
import faker from 'faker'

const time = new Date().toDateString()

const App = () => {
    return (
        <div  className="ui container comments">
          <CommentDetail author={faker.name.findName()} time={time} comments={faker.lorem.word()}/>
          <CommentDetail author={faker.name.findName()} time={time} comments={faker.lorem.word()}/>
          <CommentDetail author={faker.name.findName()} time={time} comments={faker.lorem.word()}/>

        </div>
    )
}

reactDOM.render(
    <App />, document.querySelector('#root')
)