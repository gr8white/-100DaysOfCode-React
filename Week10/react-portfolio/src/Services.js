import React, { Component } from 'react'
import Icon from './Icon'
import './Services.css'

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>What We Offer</h2>
        <div className="row">
          <Icon icon={"phone-portrait"} title={"Responsive"} desc={"Looks great on any screen size!"}/>
          <Icon icon={"brush"} title={"Redesigned"} desc={"Freshly redesigned for Bootstrap 4"}/>
          <Icon icon={"thumbs-up"} title={"Favorited"} desc={"Millions of users love Start Bootstrap"}/>
          <Icon icon={"help"} title={"Questions"} desc={"I mustache you a question"}/> 
        </div>
      </div>
    )
  }
}
