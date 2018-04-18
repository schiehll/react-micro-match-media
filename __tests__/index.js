import React, { Fragment, Component } from 'react'
import { render } from 'react-dom'
import MatchMedia from '../src'

class App extends Component {
  state = {
    maxWidth: 600
  }

  updateMaxWidth = () => {
    this.setState({ maxWidth: 800 })
  }

  render() {
    return (
      <Fragment>
        <MatchMedia query={`(max-width: ${this.state.maxWidth}px)`}>
          {matches => {
            if (matches) return <div data-test="match">match</div>
            return <div data-test="no-match">no match</div>
          }}
        </MatchMedia>
        <button onClick={this.updateMaxWidth}>Set max-width to 800</button>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('root'))
