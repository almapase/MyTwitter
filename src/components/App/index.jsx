import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
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
        displayName: 'Alex Pacheco'
      }
    }
  }

  render(){
    return(
      <Router>
        <div>
          <Header/>

          <Route exact path="/" render={()=>{
            // Ruta Raiz
            if (this.state.user) {
              return( <Main user={this.state.user}/> )
            } else {
              // Render <Login />
            }
          }}/>

          <Route path='/profile' render={()=>{
            // Render <Profile />
          }}/>

          <Route path='/user/:userName' render={({params})=>{
            // Render <Profile /> pasando params.userName
          }}/>

        </div>
      </Router>
    )
  }
}

export default App
