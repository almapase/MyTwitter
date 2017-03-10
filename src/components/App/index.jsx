import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from '../Header'
import Main from '../Main'

class App extends Component {
  constructor(){
    super()

    this.state = {
      user: {
        photoURL: 'https://pbs.twimg.com/profile_images/839971293390864384/qEnJeVT-.jpg',
        email: 'alex.pacheco.s@gmail.com',
        onOpenText: false
      }
    }
  }
  render(){
    return(
      <div>
        <Header/>
        <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App
