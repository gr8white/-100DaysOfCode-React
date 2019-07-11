import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo">React Project</h2>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact (skip day)</a></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation
