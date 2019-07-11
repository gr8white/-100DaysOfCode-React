import React, { Component } from 'react'
import './Navigation.css'

const sections = ['Home', 'About', 'Services', 'Projects', 'Contact']
const navLinks = sections.map( section => {
  return (
    <li><a href={'#' + section}>{section}</a></li>
  )
})

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo">{this.props.logoTitle}</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
    )
  }
}

export default Navigation
