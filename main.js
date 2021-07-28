const form = document.getElementById('search-form')
let url = 'https://proxy-itunes-api.glitch.me/search?country=us&entity=song&limit=5&term='
const resultsList = document.getElementById('results-list')

  //Event listener

form.addEventListener('submit', function (event) {
    event.preventDefault()
    let searchText = document.getElementById('search-text').value

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
  songItem.innerHTML = `<span>${songObj.trackName}</span>`
}



//CRUD function to display results
function returnSearch(searchText) {
  //first create variable to get rid of any spaces in searchText 
  const searchToString = String(searchText)
  const refactoredSearch = encodeURIComponent(searchToString).replace(/%20/g, "+")

  fetch(url += refactoredSearch) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data')
      let results = data.results
        for (let song of results){
          renderSearchResults(song)
      }
  })
}


