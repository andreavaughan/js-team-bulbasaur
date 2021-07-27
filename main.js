const form = document.querySelector('#artist-form')
const url = 'https://proxy-itunes-api.glitch.me/search?term='
const movieList = document.querySelector('#movie-list')
const artistText = document.getElementById('artist-text').value

  //Event listener

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(artistText)
    searchParameter()
    // returnSearch()
    form.reset()
  })

function searchParameter(){
  const searchToString = String(artistText)
  console.log(searchToString)
  const refactoredSearch = encodeURIComponent(searchToString).replace(/%20/g, "+")
  console.log(refactoredSearch)
}

function returnSearch() {
  fetch(searchParameter())
    .then((response) => response.json())
    .then((data) => {
      for (const song of data) {
        console.log(song)

      }
    })
}

 

