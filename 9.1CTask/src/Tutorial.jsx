
import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


function Tutorial(props) {

  return (
    <Card>
      <Image src={props.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <h3>
          <span>{props.username}</span>
          <br/>
          <Icon name='star'/>{props.rating}
        </h3>
      </Card.Content>
    </Card>
  )

}
export default Tutorial