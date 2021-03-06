import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styles from './message.css'

class Message extends Component {
  constructor(props){
    super(props)

    this.state = {
      pressFavorite: false,
      pressRetweet: false
    }

    this.onPressRetweet = this.onPressRetweet.bind(this)
    this.onPressFavorite = this.onPressFavorite.bind(this)
  }

  onPressFavorite(){
    this.props.onFavorite()
    this.setState({
      pressFavorite: true
    })
  }

  onPressRetweet(){
    this.props.onRetweet()
    this.setState({
      pressRetweet: true
    })
  }

  render(){
    let dateFormat = moment(this.props.date).fromNow()
    let userLink = `/user/${this.props.userName}`

    return(
      <div className={styles.root}>
        <div className={styles.user}>
          <Link to={userLink}>
            <figure>
              <img src={this.props.picture} alt="avatar" className={styles.avatar}/>
            </figure>
          </Link>
          <span className={styles.displayName}>{this.props.displayName}</span>
          <span className={styles.userName}>{this.props.userName}</span>
          <span className={styles.date}>{dateFormat}</span>
        </div>
        <h3>{this.props.text}</h3>
        <div className={styles.buttons}>
          <div
            className={styles.icon}
            onClick={this.props.onReplyTweet}
          >
            <span className='fa fa-reply'></span>
          </div>
          <div
            className={(this.state.pressRetweet) ? styles.rtGreen : styles.icon}
            onClick={this.onPressRetweet}
          >
            <span className='fa fa-retweet'></span>
            <span className={styles.num}>{this.props.numRetweets}</span>
          </div>
          <div
            className={(this.state.pressFavorite) ? styles.favYellow : styles.icon}
            onClick={this.onPressFavorite}
          >
            <span className='fa fa-star'></span>
            <span className={styles.num}>{this.props.numFavorites}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Message
