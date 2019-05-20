// const DUMMY_DATA = [
//   {
//     senderId: "perborgen",
//     text: "who'll win?"
//   },
//   {
//     senderId: "janedoe",
//     text: "who'll win?"
//   }
// ]

const instanceLocator = "v1:us1:69d364a7-916b-41f6-8a11-3ed9711984c1"
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/69d364a7-916b-41f6-8a11-3ed9711984c1/token"
const username = "gr8white"
const roomId = 19432390

class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      messages: []
    }
  }

  // componentDidMount() {
  //   // const chatManager = new Chatkit.ChatManager({
  //   //   instanceLocator: instanceLocator,
  //   //   userId: username,
  //   //   tokenProvider: new Chatkit.TokenProvider({
  //   //     url: testToken
  //   //   })
  //   // })
  //   // chatManager.connect().then(currentUser => {
  //   //   currentUser.subscribeToRoom({
  //   //   roomId: roomId,
  //   //   hooks: {
  //   //     onNewMessage: message => {
  //   //       this.setState({
  //   //         messages: [...this.state.messages, message]
  //   //       })
  //   //     }
  //   //   }})
  //   // })

  //   const tokenProvider = new Chatkit.TokenProvider({
  //     url: testToken
  //   });

  //   const chatManager = new Chatkit.ChatManager({
  //     instanceLocator: instanceLocator,
  //     userId: username,
  //     tokenProvider: tokenProvider
  //   });
  //   chatManager
  //     .connect()
  //     .then(currentUser => {
  //       console.log("Connected as user ", currentUser);
  //     })
  //     .catch(error => {
  //       console.error("error:", error);
  //     });
  // }
  
  render() {
    return (
      <div className="app">
        <MessageList messages={this.state.messages} />
        {/* <SendMessageForm /> */}
      </div>
    )
  }
}

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list">                 
        {this.props.messages.map(message => {
          return (
            <li key={message.id} className="message">
              <div>
                {message.senderId}
              </div>
              <div>
                {message.text}
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));