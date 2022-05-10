import {Component} from 'react'

import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLoggedOut: true}

  onClickFunction = () => {
    this.setState(prevState => ({isLoggedOut: !prevState.isLoggedOut}))
  }

  render() {
    const {isLoggedOut} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <Message isLoggedOut={isLoggedOut} />
          {isLoggedOut ? (
            <Login login={this.onClickFunction} />
          ) : (
            <Logout logout={this.onClickFunction} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
