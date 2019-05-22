import React from 'react'
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'
import MessageList from './Components/MessageList'
import SendMessageForm from './Components/SendMessageForm'
import RoomList from './Components/RoomList.js'
import NewRoomForm from './Components/NewRoomForm'
import './App.css'

const instanceLocator = 'v1:us1:69d364a7-916b-41f6-8a11-3ed9711984c1'
const tokenURL = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/69d364a7-916b-41f6-8a11-3ed9711984c1/token'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.subscribeToRoom = this.subscribeToRoom.bind(this)
    this.getRooms = this.getRooms.bind(this)
  }

  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator,
      userId: "gr8white",
      tokenProvider: new TokenProvider({
        url: tokenURL
      })
    })

    chatManager.connect()
    .then(currentUser => {
      this.currentUser = currentUser
      this.getRooms()
      this.subscribeToRoom()
    })
    .catch(err => console.log('error on connecting', err))
  }

  getRooms() {
    this.currentUser.getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        })
      })
      .catch(err => console.log('error on joinable rooms: ', err))
  }

  subscribeToRoom(roomId) {
    this.setState({ messages: []})
    this.currentUser.subscribeToRoom({
      roomId: roomId,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [
              ...this.state.messages,
              message
            ]
          })
        }
      }
    })
    .then(room => {
      this.setState({
        roomId: room.id
      })
      this.getRooms()
    })
    .catch(err => 'error on subscribing to room: ', err)
  }

  sendMessage(text) {
    this.currentUser.sendMessage({
      text,
      roomId: this.state.roomId
    })
  }

  render() {
    return (
      <div className="app">
        <RoomList 
          subscribeToRoom={this.subscribeToRoom} 
          roomList={[...this.state.joinedRooms, ...this.state.joinableRooms]}/>
        <MessageList messages={this.state.messages}/>
        <SendMessageForm sendMessage={this.sendMessage}/>
        <NewRoomForm />
      </div>
    );
  }
}

export default App
