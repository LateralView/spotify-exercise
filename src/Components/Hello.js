import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../Actions/Buddy'

class HelloComponent extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onChange: React.PropTypes.func
  }

  _handleNameChange(e) {
    this.props.onChange(e.target.value)
  }

  render() {
    return(<div>
      <h1>Hello there {this.props.name}!</h1>
      <input type='text' value={this.props.name} onChange={this._handleNameChange.bind(this)} />
    </div>)
  }
}

const mapStateToProps = state => ({ name: state.Buddy.name })
const mapDispatchToProps = dispatch => ({
  onChange(name) {
    dispatch(actions.setName(name))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(HelloComponent)