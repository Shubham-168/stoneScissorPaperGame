const Game = props => {
  const {choiceDetails, selectChoice} = props
  const {id, imageUrl} = choiceDetails
  const onClicked = () => {
    selectChoice(id)
  }

  const dataId = () => {
    switch (id) {
      case 'ROCK':
        return 'rockButton'
      case 'SCISSORS':
        return 'scissorsButton'
      case 'PAPER':
        return 'paperButton'
      default:
        return null
    }
  }

  return (
    <li>
      <button data-testid={dataId()} type="button" onClick={onClicked}>
        <img src={imageUrl} alt={id} />
      </button>
    </li>
  )
}

export default Game
