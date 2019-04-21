import React from 'react'
import Stats from './Stats'
import StopWatch from './StopWatch'

const Header = ({title}) => {
  return (
    <header>
      <Stats />
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header