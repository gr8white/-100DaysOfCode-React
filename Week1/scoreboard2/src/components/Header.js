import React from 'react'
import Stats from './Stats'
import StopWatch from './StopWatch'
import PropTypes from 'prop-types'

const Header = ({players, title}) => {
  return (
    <header>
      <Stats players={players}/>
      <h1>{ title }</h1>
      <StopWatch />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  players: PropTypes.arrayOf(PropTypes.objects)
}

Header.defaultProps = {
  title: 'Scoreboard'
}

export default Header