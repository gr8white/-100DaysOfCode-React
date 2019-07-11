import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation'
import Header from './Header'
import Services from './Services'
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation logoTitle="D White"/>
        <Header title='Stylish Portfolio' button='Find Out More'/>
        <Services />
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
