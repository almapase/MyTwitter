import React, { Component } from 'react'

import styles from './profile-bar.css'

class ProfileBar extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <div className={styles.root}>
        <figure>
          <img className={styles.avatar} src={this.props.picture} alt="avatar"/>
        </figure>
        <span className={styles.userName}>Hola @{this.props.userName}!</span>
        <button onClick={this.props.onOpenText} className={styles.button} >
          <span className="fa fa-lg fa-edit" ></span> Tweet!
        </button>
      </div>
    )
  }
}

export default ProfileBar
