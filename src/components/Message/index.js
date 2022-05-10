import './index.css'

const Message = props => {
  const {isLoggedOut} = props
  const message = isLoggedOut ? 'Please Login' : 'Welcome User'

  return <h1 className="heading">{message}</h1>
}

export default Message
