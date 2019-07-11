import React, { Component } from 'react'
import './Header.css'
import Background from './img/bg-pencils.jpg'

const headerStyles = {
  'backgroundImage': `url( ${Background})`,
  'height': '80vh',
  'backgroundSize': 'cover'
}

export default class Header extends Component {
  render() {
    return (
      <header style={headerStyles}>
        <h1>{this.props.title}</h1>
        <p>A Free Bootstrap Theme by Start Bootstrap</p>
        <a href="#button">{this.props.button}</a>
      </header>
    )
  }
}
