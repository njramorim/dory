import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import App from './../components/app'

function mapStateToProps (state) {
  return {}
}

class AppContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func
  }

  render () {
    return <App />
  }
}

export default connect(mapStateToProps)(AppContainer)
