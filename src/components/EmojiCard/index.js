// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emoji, suffle} = props
  const {id, emojiName, emojiUrl} = emoji
  const onSuffle = () => suffle(id)

  return (
    <li className="emoji-card">
      <button className="emoji-card-btn" type="button" onClick={onSuffle}>
        <img className="emoji-card-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
