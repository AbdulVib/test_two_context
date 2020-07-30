import React, { Component } from 'react'

//comps
import Congrats from './container/congrats/Congrats'
import GuessedWords from './container/guessWord/GuessWord'

export default class App extends Component {
  state = {
    success: true
  }
  render() {
    return (
      <div className="container" data-test="component-app">
        <h1>Guess ?</h1>
        {/* <Congrats success={ this.state.success } />
        <GuessedWords guessedWords={[
          { guessedWord: 'hello', letterMatchCount: 12}
        ]} /> */}
      </div>
    )
  }
}

