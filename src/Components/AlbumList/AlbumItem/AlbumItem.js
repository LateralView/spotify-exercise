import React from 'react'

import ActionButton from '~/Components/ActionButton/ActionButton'
import './AlbumItem.scss'

class AlbumItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired,
    onCommentClick: React.PropTypes.func
  }

  constructor() {
    super()
    this.onItemClick = this.onItemClick.bind(this)
  }

  onItemClick() {
    console.log('THISPROPS:', this.props)
    this.props.onCommentClick(this.props.item)
  }

  render() {
    let url = `url(${this.props.item.images[0].url})`

    return(
      <div className="album-item" style={{ backgroundImage: url }}>
        <span>
          <div className="album-item-image">
            <img src={ this.props.item.images[0].url } />
          </div>
          <div className="album-item-info">
            <h2>{ this.props.item.artists[0].name }</h2>
            <h1>{ this.props.item.name }</h1>
          </div>
          <div className="album-item-actions">
            <ActionButton label="VIEW COMMENTS" onButtonClick={ this.onItemClick } />
          </div>
        </span>
      </div>
    )
  }
}

export default AlbumItem
