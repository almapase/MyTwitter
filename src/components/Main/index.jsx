import React, { Component } from 'react'
import uuid from 'uuid'

import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: Object.assign(
        {},
        this.props.user,
        {retweets: []},
        {favorites: []}
      ),
      openText: false,
      userNameToReply: '',
      messages: [
        {
          id: uuid.v4(),
          text: 'Mensaje de prueba',
          picture: 'https://pbs.twimg.com/profile_images/839971293390864384/qEnJeVT-.jpg',
          displayName: 'Alex Pacheco',
          userName: 'almapase',
          date: Date.now() - 180000,
          retweets: 0,
          favorites: 0
        },
        {
          id: uuid.v4(),
          text: 'Este es un nuevo mensaje',
          picture: 'https://pbs.twimg.com/profile_images/839971293390864384/qEnJeVT-.jpg',
          displayName: 'Alex Pacheco',
          userName: 'almapase',
          date: Date.now() - 1800000,
          retweets: 0,
          favorites: 0
        }
      ]
    }

    this.handleSendText = this.handleSendText.bind(this)
    this.handleCloseText = this.handleCloseText.bind(this)
    this.handleOpenText = this.handleOpenText.bind(this)
    this.handleRetweet = this.handleRetweet.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
    this.handleReplyTweet = this.handleReplyTweet.bind(this)
  }

  handleSendText(event){
    event.preventDefault()
    let newMessage = {
      id: uuid.v4(),
      userName: this.props.user.email.split('@')[0],
      displayName: this.props.user.displayName,
      picture: this.props.user.photoURL,
      date: Date.now(),
      text: event.target.text.value,
      favorites: 0,
      retweets: 0
    }
    this.setState({
      messages: this.state.messages.concat(newMessage),
      openText: false
    })
  }

  handleCloseText(event){
    event.preventDefault()
    this.setState({openText: false})
  }

  handleOpenText(event){
    event.preventDefault()
    this.setState({openText: true})
  }

  handleRetweet(msgId){
    let alReadyRetweet = this.state.user.retweets.filter(rt => rt === msgId)

    if (alReadyRetweet.length === 0) {
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.retweets++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.retweets.push(msgId)

      this.setState({
        messages: messages,
        user: user
      })
    }
  }

  handleFavorite(msgId){
    let alReadyFavirited = this.state.user.favorites.filter(fav => fav === msgId)

    if(alReadyFavirited.length === 0){
      let messages = this.state.messages.map(msg => {
        if (msg.id === msgId) {
          msg.favorites++
        }
        return msg
      })

      let user = Object.assign({}, this.state.user)
      user.favorites.push(msgId)

      this.setState({
        messages: messages,
        user: user
      })
    }

  }

  handleReplyTweet(msgId, userNameToReply){
    this.setState({
      openText: true,
      userNameToReply: userNameToReply
    })
  }

  renderOpenText(){
    if (this.state.openText) {
      return (
        <InputText
          onSendText={this.handleSendText}
          onCloseText={this.handleCloseText}
          userNameToReply={this.state.userNameToReply}
        />
      )
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
        <MessageList
          messages={this.state.messages}
          onRetweet={this.handleRetweet}
          onFavorite={this.handleFavorite}
          onReplyTweet={this.handleReplyTweet}
        />
      </div>
    )
  }
}

export default Main
