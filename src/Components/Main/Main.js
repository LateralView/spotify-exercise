import React from 'react'
import Search from '../Search/Search'
import AlbumList from '../AlbumList/AlbumList'
import { connect } from 'react-redux'
import * as actions from '../../Actions/Search'
import './main.scss'

export class Main extends React.Component {
  render() {
    return(
      <div className="main">
        <Search { ...this.props } />
        <AlbumList { ...this.props } />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  albums: state.Search.albums
})

const mapDispatchToProps = (dispatch) => ({
  onSearch (query) {
    dispatch(actions.searchRequested(query.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
