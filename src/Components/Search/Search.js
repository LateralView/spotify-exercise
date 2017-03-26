import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../Actions/Search'
//import 'material-design-icons/iconfont/material-icons.css'
import './_search.scss'

class Search extends React.Component {
  static propTypes = {
    onSearch: React.PropTypes.func
  }

  render() {
    return(
      <div className="searchbox">
        { /*<i className="material-icons">search</i> */ }
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onChange={ this.props.onSearch } />
      </div>
    )
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  onSearch(query) {
    dispatch(actions.searchRequested(query.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
