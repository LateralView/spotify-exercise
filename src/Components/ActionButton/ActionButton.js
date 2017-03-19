import React from 'react'

import './ActionButton.scss'

class ActionButton extends React.Component {
  static propTypes = {
    customClass: React.PropTypes.string,
    label: React.PropTypes.string.isRequired,
    onButtonClick: React.PropTypes.func.isRequired
  }

  render() {
    return(
      <button
        className={ `action-button ${this.props.customClass}` }
        onClick={ this.props.onButtonClick }>
        { this.props.label }
      </button>
    )
  }
}

export default ActionButton
