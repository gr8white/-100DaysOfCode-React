import React, { Component } from 'react'
import './Services.css'

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <h3>Services</h3>
        <h2>What We Offer</h2>
        <div className="row">
          <div>
            <span>
              <ion-icon name="phone-portrait"></ion-icon>
            </span>
            <h4>Responsive</h4>
            <p>Looks great on any screen size!</p>
          </div>
          <div>
            <span>
              <ion-icon name="brush"></ion-icon>
            </span>
            <h4>Redesigned</h4>
            <p>Freshly redesigned for Bootstrap 4</p>
          </div>
          <div>
            <span>
              <ion-icon name="thumbs-up"></ion-icon>
            </span>
            <h4>Favorited</h4>
            <p>Millions of users love &hearts; Start Bootstrap</p>
          </div>
          <div>
            <span>
              <ion-icon name="help"></ion-icon>
            </span>
            <h4>Questions</h4>
            <p>I mustache you a question</p>
          </div>
        </div>
      </div>
    )
  }
}
