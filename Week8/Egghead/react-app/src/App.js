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

//~~~~~~~~~~~~~Video 14~~~~~~~~~~~~~~~~~~

// import React, { Component } from 'react'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       items: []
//     }
//   }

//   componentWillMount() {
//     fetch('https://swapi.co/api/people')
//       .then( response => response.json())
//       .then( ({results: items}) => this.setState({items}))
//   }

//   filter(e) {
//     this.setState ({filter: e.target.value})
//   }
  
//   render() {
//     let items = this.state.items
//     if (this.state.filter) {
//       items = items.filter( item =>
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//         <input type="text" onChange={this.filter.bind(this)}/>
//         {items.map(item => 
//         <People key={item.name} person={item}/>)}
//       </div>
//     )
//   }
// }

// const People = (props) => <h4>{props.person.name}</h4>

// export default App

//~~~~~~~~~~~~~Video 15~~~~~~~~~~~~~~~~~~

// import React, { Component } from 'react'

// const HOC = (InnerComponent) => class extends Component {
//   constructor() {
//     super()
//     this.state ={
//       count: 0
//     }
//     this.update = this.update.bind(this)
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   render() {
//     return (
//       <InnerComponent 
//         {...this.props}
//         {...this.state}
//         update = {this.update}
//       />
//     )
//   }
// }

// export class App extends Component {
//   render() {
//     return (
//       <div>
//         <Button>Button</Button>
//         <hr />
//         <LabelHOC>Label</LabelHOC>
//       </div>
//     )
//   }
// }

// const Button = HOC((props) => 
//   <button onClick={props.update}>
//     {props.children} - {props.count}
//   </button>)

// class Label extends Component {
//   render() {
//     return (
//       <label onMouseMove={this.props.update}>
//         {this.props.children} - {this.props.count}
//       </label>
//     )
//   }
// }

// const LabelHOC = HOC(Label)

// export default App

// ~~~~~~~~~~~~~Videos 16~~~~~~~~~~~~~~~~~~
// import React, { Component } from 'react'
// import './App.css'

// export class App extends Component {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       input: '/*Add your JSX here*/',
//       output: '',
//       err: ''
//     }
//   }

//   update(e) {
//     let code = e.target.value
//     try {
//       this.setState({
//         output: window.Babel
//         .transform(code, {presets: [ 'es2015', 'react']})
//         .code,
//         err: ''
//       })
//     } catch (error) {
//       this.setState({err: error.message})
//     }
//   }
  
//   render() {
//     return (
//       <div>
//         <header>{this.state.err}</header>
//         <div className="container">
//           <textarea
//             onChange={this.update.bind(this)}
//             defaultValue={this.state.input}
//           />
//           <pre>
//             {this.state.output}
//           </pre>
//         </div>
//       </div>
//     )
//   }
// }

// export default App