const form = document.getElementById('search-form')
let url = 'https://proxy-itunes-api.glitch.me/search?country=us&entity=song&limit=9&term='
const resultsList = document.getElementById('results-list')

//Event listener

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let searchText = document.getElementById('search-text').value
    resultsList.innerHTML = ''
    returnSearch(searchText)
    form.reset()
})



//This function renders the search results on the page
function renderSearchResults(songObj) {
  let resultItem = document.createElement('li')
  console.log(resultItem)
  resultItem.classList.add('card')
  searchResultsText(resultItem, songObj)
  resultsList.appendChild(resultItem)
}

//This function adds the text of the search results on the page
function searchResultsText (songItem, songObj){
  songItem.innerHTML = `<span class="result-item"><img src="${songObj.artworkUrl100}"><h3>${songObj.trackName}</h3><h4>${songObj.artistName}</h4><p>${songObj.collectionName}</p><p>${moment(songObj.releaseDate).format('MMM d, YYYY')}</p><button>Play Bite &#127852</button></span>`
}

//event listener for audio element
document.getElementById('search-results').addEventListener('click', function(e) {
  if (e.target && e.target.nodeName == 'li') {
    console.log('clicked!')
  }
})

//GET function to display results
function returnSearch(searchText) {
  //first create variable to get rid of any spaces in searchText 
  const searchToString = String(searchText)
  const refactoredSearch = encodeURIComponent(searchToString).replace(/%20/g, "+")

  fetch(url + refactoredSearch) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data')
      let results = data.results
        for (let song of results){
          renderSearchResults(song)
      }
  })
}


