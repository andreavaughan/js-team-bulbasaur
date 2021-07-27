const form = document.querySelector('#artist-form')
const url = 'https://proxy-itunes-api.glitch.me/search?term='
const movieList = document.querySelector('#movie-list')
const artistText = document.getElementById('artist-text').value
const searchToString = String(artistText)
const searchParameter = url + searchToString

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log(artistText)
    
    console.log(searchParameter)
    returnSearch()
    // this will clear my input after submitting a todo
    form.reset()
  })

  // // const form = need to get form id from html
  // // const sontList = need to get list id from html
  
  // //Event listeners
  

function returnSearch() {
  fetch(searchParameter)
    .then((response) => response.json())
    .then((data) => {
      for (const song of data) {
        console.log(song)
      }
    })
}

 

