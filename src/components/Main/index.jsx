import React, { Component } from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      openText: false,
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje de prueba',
          picture: 'https://pbs.twimg.com/profile_images/839971293390864384/qEnJeVT-.jpg',
          displayName: 'Alex Pacheco',
          userName: 'almapase',
          date: Date.now() - 180000
        },
        {
          id: uuid.v4(),
          text: 'Este es un nuevo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/839971293390864384/qEnJeVT-.jpg',
          displayName: 'Alex Pacheco',
          userName: 'almapase',
          date: Date.now() - 1800000
        }
      ]
    }
  }

  handleOpenText(event){
    event.preventDefault()
    this.setState({openText: true})
  }

  renderOpenText(){
    if (this.state.openText) {
      return <InputText />
    }
  }

  render(){
    return(
      <div>
        <ProfileBar
          picture = {this.props.user.photoURL}
          userName= {this.props.user.email.split('@')[0]}
          onOpenText={this.handleOpenText}
        />
        {this.renderOpenText()}
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

export default Main
