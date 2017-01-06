import React, {Component, PropTypes} from 'react'
import {Provider} from 'react-redux'
import App from './../app'

export default class Root extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  }

  render () {
    return <Provider {...{
      store: this.props.store,
      children: <App />
    }} />
  }
}
