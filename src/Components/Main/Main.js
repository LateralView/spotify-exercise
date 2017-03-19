import React from 'react'
import Search from '../Search/Search'
import AlbumList from '../AlbumList/AlbumList'
import './main.scss'

class Main extends React.Component {

  constructor() {
    super()
    this.state = {
      albums: []
    }

    this.onSearch = this.onSearch.bind(this)
    
    this.search()
  }

  search(query = 'muse') {
    fetch(`http://localhost:3000/search?q=${query}`)
      .then(response => response.json())
      .then((data) => {
        console.log('DATA', data)
        this.setState({
          albums: data.albums && data.albums.items
        })
      })
  }

  onSearch(e) {
    let q = e.target.value
    if(q.length > 3) {
      this.search(e.target.value)
    }
  }

  render() {
    return(
      <div className="main">
        <Search onSearch={ this.onSearch } />
        <AlbumList albums={ this.state.albums } />
      </div>
    )
  }
}

export default Main
