import React from 'react'

class MatchMedia extends React.Component {
  canUseDOM = !!(typeof window !== 'undefined')

  state = {
    query: this.props.query,
    matches: this.canUseDOM
      ? window.matchMedia(this.props.query).matches
      : false
  }

  matchMediaListener = ({ matches }) => {
    this.setState({ matches })
  }

  addListener(query) {
    window.matchMedia(query).addListener(this.matchMediaListener)
  }

  removeListener(query) {
    window.matchMedia(query).removeListener(this.matchMediaListener)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.query !== prevState.query) {
      return {
        query: nextProps.query,
        matches: window.matchMedia(nextProps.query).matches
      }
    }

    return null
  }

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.state

    if (prevState.query !== query) {
      this.removeListener(query)
      this.addListener(query)
    }
  }

  componentDidMount() {
    this.addListener(this.props.query)
  }

  componentWillUnmount() {
    this.removeListener(this.props.query)
  }

  render() {
    return this.props.children(this.state.matches)
  }
}

export default MatchMedia
