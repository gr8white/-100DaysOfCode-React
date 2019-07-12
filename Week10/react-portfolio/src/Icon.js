import React, { Component } from 'react'

export default class Icon extends Component {
  render(props) {
    return (
      <div>
        <span>
          <ion-icon name={this.props.icon}></ion-icon>
          </span>
          <h4>{this.props.title}</h4>
          <p>{this.props.desc}</p>
      </div>
    )
  }
}
