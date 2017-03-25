class SearchApi {
  search(query) {
    return new Promise((resolve, reject) => {
      if(query.length > 3) {
        fetch(`http://localhost:3000/search?q=${query}`)
          .then(response => response.json())
          .then((data) => {
            resolve(data.albums.items || [])
          }, reject)
      }
      else {
        resolve([])
      }
    })
  }
}

export default new SearchApi()
