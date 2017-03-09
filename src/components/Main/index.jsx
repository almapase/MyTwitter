import React, { Component } from 'react'
import MessageList from '../MessageList'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      messages: [
        {
          text: 'Mensaje de prueba',
          picture: 'https://pbs.twimg.com/profile_images/702215975068893184/93UyNcuZ.jpg',
          displayName: 'Alex Pacheco',
          userName: 'almapase',
          date: Date.now() - 180000
        },
        {
          text: 'Este es un nuevo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/702215975068893184/93UyNcuZ.jpg',
          displayName: 'Alex Pacheco',
          userName: 'almapase',
          date: Date.now() - 1800000
        }
      ]
    }
  }

  render(){
    return(
      <MessageList messages={this.state.messages} />
    )
  }
}

export default Main
