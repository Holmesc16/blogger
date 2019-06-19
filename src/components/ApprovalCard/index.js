import React from 'react'
import { Card } from 'semantic-ui-react'
import { Button } from './styles'

const ApprovalCard = (props) => {
    return (
    <Card.Group style={{'margin': '24px 0'}}>
    <Card>
      <Card.Content>
        <Card.Header>{props.children}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button color="green">
           {props.successButtonText}
          </Button>
          <Button color="red">
           {props.denyButtonText}
          </Button>
        </div>
      </Card.Content>
    </Card>
    </Card.Group>
    )
}

export default ApprovalCard