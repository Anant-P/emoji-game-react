/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  emojisList = this.props

  state = {
    shuffledEmojisList: this.emojisList.emojisList,
    clickedEmojiList: [],
    score: 0,
    topScore: 0,
    isGameOver: false,
    isWin: false,
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.props
    const {clickedEmojiList} = this.state

    const {score} = this.state

    if (score === 11) {
      this.setState(prevState => ({
        isWin: !prevState.isWin,
        isGameOver: !prevState.isGameOver,
      }))
    }

    this.setState({
      shuffledEmojisList: emojisList.sort(() => Math.random() - 0.5),
      clickedEmojiList: [...clickedEmojiList, id],
    })

    if (clickedEmojiList.includes(id)) {
      this.setState(prevState => ({
        isGameOver: !prevState.isGameOver,
      }))
    } else {
      this.setState(prevState => ({score: prevState.score + 1}))
    }
  }

  playAgain = () => {
    const {score, topScore} = this.state

    if (score >= topScore) {
      this.setState({topScore: score})
    }
    this.setState(prevState => ({
      isGameOver: !prevState.isGameOver,
      score: 0,
      clickedEmojiList: [],
    }))
  }

  render() {
    const {shuffledEmojisList, score, topScore, isGameOver, isWin} = this.state

    const game = () => (
      <ul className="emoji-card-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emoji={eachEmoji}
            suffle={this.shuffledEmojisList}
          />
        ))}
      </ul>
    )

    const winLoseGameCard = () => (
      <WinOrLoseCard score={score} isWin={isWin} playAgain={this.playAgain} />
    )

    const gameOver = isGameOver ? winLoseGameCard() : game()

    return (
      <div className="bg-container">
        <NavBar score={score} topScore={topScore} isWin={isWin} />
        <div className="emoji-game-container">{gameOver}</div>
      </div>
    )
  }
}

export default EmojiGame
