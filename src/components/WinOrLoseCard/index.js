// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, isWin, playAgain} = props

  const onPlayAgain = () => playAgain()

  const isWinLose = isWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <div className="win-loss-card">
      <div className="win-loss-card-left">
        <h1 className="win-lose-card-heading">
          {isWin ? 'You Won' : 'You Lose'}
        </h1>
        <p className="win-lose-card-score-text">Best Score</p>
        <p className="win-lose-card-score">{score}/12</p>
        <button className="play-again-btn" type="button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
      <div className="win-loss-card-right">
        <img className="win-loss-card-img" src={isWinLose} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
