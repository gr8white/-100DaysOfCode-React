// const title = React.createElement (
//   'h1', //The element we're creating
//   { id: 'main-title', title: 'This is a title.'}, //Attributes being added to the element above
//   'My First React Element!' //
// );
// const title = 'First React Element!'

// const desc = React.createElement (
//   'p',
//   null,
//   'I just learned how to create a React Node and render it into the DOM.'
// );
// const desc = 'I just learned how to create a React Node and render it into the DOM.'

// const myTitleID = 'main-title'
// const name = 'Derrick'

// const header = React.createElement (
//   'header',
//   null,
//   title, 
//   desc
// )
// const header = (
//   <header>
//     <h1 id={ myTitleID }>{ name }'s { title }</h1>
//     <p>{ desc }</p>
//   </header>
// )

function Header() {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats" >Players: 1</span>
    </header>
  )
}

ReactDOM.render(
  header,
  document.getElementById('root')
);