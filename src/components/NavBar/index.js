// Write your code here.

import './index.css'

const NavBar = props => {
  const {score, topScore, isWin} = props

  const navRight = () => (
    <div className="nav-right">
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )

  console.log(isWin)

  const isWinGame = isWin ? null : navRight()

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img
          className="emoji-nav-logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-logo-para">Emoji Game</h1>
      </div>
      {isWinGame}
    </nav>
  )
}

export default NavBar
