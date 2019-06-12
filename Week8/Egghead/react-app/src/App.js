import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      items: []
    }
  }

  componentWillMount() {
    fetch('http://swapi.co/api/people')
      .then( response => response.json)
      .then( ({results: items}) => this.setState({items}))
  }
  
  render() {
    let items = this.state.items
    return (
      <div>
        {items.map(item => <h4>{item.name}</h4>)}
      </div>
    )
  }
}

export default App


//~~~~~~~~~~~~~Videos 2-6~~~~~~~~~~~~~~~~~~

// import React from 'react'
// import PropTypes from 'prop-types';

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       txt: "D White"
//     }
//     this.update = this.update.bind(this)
//   }
//   update(e) {
//     this.setState({txt: e.target.value})
//   }
//   render() {
//     return (
//     <div>
//       <Widget update={this.update} />
//       <Widget update={this.update} />
//       <Widget update={this.update} />
//       <h1>Hello {this.state.txt}</h1>
//     </div>
//     )
//   }
// }

// const Widget = (props) => 
//   <input type="text" onChange={props.update}/>

// App.propTypes = {
//   txt: PropTypes.string,
//   cat: PropTypes.number.isRequired
// }

// App.defaultProps = {
//   txt: "User"
// }

// export default App

//~~~~~~~~~~~~~Video 7~~~~~~~~~~~~~~~~~~

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <Button>I <Heart /> React</Button>
//     )
//   }
// }

// const Button = (props) => <button>{props.children}</button>

// const Heart = () => <span>&hearts;</span>


//~~~~~~~~~~~~~Video 10~~~~~~~~~~~~~~~~~~
// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       a:''
//     }
//     this.update = this.update.bind(this)
//   }
//   update(){
//       this.setState({
//         a: this.refs.a.value,
//         b: this.refs.b.value
//       })
//     }
//   render() {
//     return (
//       <div>
//         <input
//           ref="a"
//           type="text"
//           onChange={this.update}
//         />
//         {this.state.a}
//         <hr />
//         <input
//           ref="b"
//           type="text"
//           onChange={this.update}
//         />
//         {this.state.b}
//       </div>
//     )
//   }
// }

// export default App

//~~~~~~~~~~~~~Video 11~~~~~~~~~~~~~~~~~~

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       val: 0
//     }
//     this.update = this.update.bind(this)
//   }
//   update(){
//     this.setState({val: this.state.val + 1 })
//   }
//   componentWillMount(){
//     console.log('componentWillMount')
//   }
//   render() {
//     console.log('render')
//     return (
//       <button onClick={this.update}>{this.state.val}</button>
//     )
//   }
//   componentDidMount(){
//     console.log('componentDidMount')
//   }
//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//   }
// }

// class Wrapper extends Component {
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>UnMount</button>
//         <div id='a' />
//       </div>
//     )
//   }
// }

// export default Wrapper

//~~~~~~~~~~~~~Video 13~~~~~~~~~~~~~~~~~~

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       increasing: false
//     }
//   }
  
//   update(){
//     ReactDOM.render(<App val={this.props.val + 1}/>, document.getElementById('root'))
//   }
//   componentWillReceiveProps(nextProps) {
//     this.setState({increasing: nextProps.val > this.props.val})
//   }
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextProps.val % 3 === 0
//   }
//   render() {
//     console.log(this.state.increasing)
//     return (
//       <button onClick={this.update.bind(this)}>
//         {this.props.val}
//       </button>
//     )
//   }
//   componentDidUpdate(prevProps, prevState) {
//     console.log(`prevProps: ${prevProps.val}`)
//   }
// }

// App.defaultProps = {val: 0}

// export default App