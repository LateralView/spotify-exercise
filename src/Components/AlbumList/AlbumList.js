import React from 'react'
import { connect } from 'react-redux'
import AlbumItem from './AlbumItem/AlbumItem'

import './AlbumList.scss'

class AlbumList extends React.Component {
  static propTypes = {
    albums: React.PropTypes.array.isRequired
  }

  constructor() {
    super()
    this.gotoComment = this.gotoComment.bind(this)
  }

  gotoComment() {
    //console.log(`Se clickeó el comment del item: ${ item.name }`)
  }

  render() {
    const items = this.props.albums.map((albumItem) => 
      <AlbumItem
        key={ albumItem.id }
        item={ albumItem }
        onCommentClick={ this.gotoComment } />
    )
    return(
      <div className="album-list">
        { items }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  albums: state.Search.albums
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList)
