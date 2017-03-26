import React from 'react'
import Search from '../Search/Search'
import AlbumList from '../AlbumList/AlbumList'
import './main.scss'

export class Main extends React.Component {
  render() {
    return(
      <div className="main">
        <Search />
        <AlbumList />
      </div>
    )
  }
}

export default Main
