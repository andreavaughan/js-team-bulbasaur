const form = document.getElementById('search-form')
const url = 'https://proxy-itunes-api.glitch.me/search?term=ariana+grande&country=us&entity=song&limit=5'
const resultsList = document.getElementById('results-list')

  //Event listener

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const searchText = document.getElementById('search-text').value
    console.log(searchText)

    // addSearchParameter ()

    returnSearch()
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


//This function is in progress to add characters to search value so that they match the parameters
function addSearchParameter (){
  const searchText = document.getElementById('search-text').value
  const searchToString = String(searchText)
  console.log(searchText)
  console.log(searchToString)
  const refactoredSearch = encodeURIComponent(searchToString).replace(/%20/g, "+")
  console.log(refactoredSearch)
}

//add variable to turn addSearch Parameter function result as a global variable


//CRUD function to display results
function returnSearch() {
  fetch(url) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data')
      let results = data.results
        for (let song of results){
          renderSearchResults(song)
      }
  })
}


