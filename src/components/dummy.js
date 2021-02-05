import React from 'react'
import { Link } from 'react-router-dom'

class Dummy extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false
    }
  }
  render() {
    const { isLoggedIn } = this.state
    return (
      <>
        <h1>Hello {(isLoggedIn) ? 'USER!!' : 'Guest'}</h1>
        <button
          className='login-button' 
          onClick={() => this.setState({ isLoggedIn: !isLoggedIn })}>
          {(isLoggedIn) ? 'LOGOUT' : 'Sign In'}</button>
        <Link 
        className="App-link" 
        to="/skarzold">Skarzold</Link>
        <Link 
        className="App-link"
        to="/helya">Helya</Link>
      </>
    )
  }
}

export default Dummy