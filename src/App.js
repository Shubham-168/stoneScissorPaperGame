import {Component} from 'react'

import Game from './components/Game'

import Rules from './components/Rules'

import {Paragraph} from './styledComponent'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const randomChoiceObject =
  choicesList[Math.floor(Math.random() * choicesList.length)]

class App extends Component {
  state = {
    yourChoiceId: '',
    opponentChoiceId: randomChoiceObject.id,
    score: 0,
    result: '',
    showResult: false,
  }

  selectChoice = id => {
    const {opponentChoiceId, score} = this.state
    this.setState({showResult: true, yourChoiceId: id})
    if (id === 'PAPER' && opponentChoiceId === 'ROCK') {
      this.setState({result: 'YOU WON', score: score + 1})
    } else if (id === 'SCISSORS' && opponentChoiceId === 'ROCK') {
      this.setState({result: 'YOU LOSE', score: score - 1})
    } else if (id === 'ROCK' && opponentChoiceId === 'PAPER') {
      this.setState({result: 'YOU LOSE', score: score - 1})
    } else if (id === 'SCISSORS' && opponentChoiceId === 'PAPER') {
      this.setState({result: 'YOU WON', score: score + 1})
    } else if (id === 'ROCK' && opponentChoiceId === 'SCISSORS') {
      this.setState({result: 'YOU WON', score: score + 1})
    } else if (id === 'PAPER' && opponentChoiceId === 'SCISSORS') {
      this.setState({result: 'YOU LOSE', score: score - 1})
    } else if (id === opponentChoiceId) {
      this.setState({result: 'IT IS DRAW'})
    }
  }

  onPlayAgain = () => {
    const newrandomChoiceObject =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    this.setState({
      showResult: false,
      opponentChoiceId: newrandomChoiceObject.id,
    })
  }

  renderPlayingView = () => (
    <ul>
      {choicesList.map(eachChoice => (
        <Game
          key={eachChoice.id}
          choiceDetails={eachChoice}
          selectChoice={this.selectChoice}
        />
      ))}
    </ul>
  )

  renderResultView = () => {
    const {yourChoiceId, opponentChoiceId, result} = this.state
    const filterUserChoice = choicesList.filter(
      eachChoice => eachChoice.id === yourChoiceId,
    )
    const filterOpponentChoice = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoiceId,
    )

    return (
      <div>
        <div>
          <p> YOU </p>
          <img src={filterUserChoice[0].imageUrl} alt="your choice" />
        </div>
        <div>
          <p> OPPONENT </p>
          <img src={filterOpponentChoice[0].imageUrl} alt="opponent choice" />
        </div>
        <div>
          <p> {result} </p>
          <button type="button" onClick={this.onPlayAgain}>
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  renderRulesView = () => <Rules />

  render() {
    const {showResult, score} = this.state
    return (
      <div className="game-main-container">
        <div>
          <div>
            <h1> ROCK PAPER SCISSORS </h1>
          </div>
          <div>
            <p> Score </p>
            <Paragraph> {score} </Paragraph>
          </div>
        </div>

        {showResult ? this.renderResultView() : this.renderPlayingView()}

        {this.renderRulesView()}
      </div>
    )
  }
}

export default App
