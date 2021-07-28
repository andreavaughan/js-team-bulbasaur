const form = document.querySelector('#artist-form')
const url = 'https://proxy-itunes-api.glitch.me/search?term=ariana+grande&country=us&entity=song&limit=5'
// const movieList = document.querySelector('#movie-list')



  //Event listener

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const artistText = document.getElementById('artist-text').value
    console.log(artistText)

    // addSearchParameter ()

    returnSearch()
    form.reset()
})

//This function is in progress to add characters to search value so that they match the parameters
function addSearchParameter (){
  const artistText = document.getElementById('artist-text').value
  const searchToString = String(artistText)
  console.log(artistText)
  console.log(searchToString)
  const refactoredSearch = encodeURIComponent(searchToString).replace(/%20/g, "+")
  console.log(refactoredSearch)
}
  

//CRUD function to display results
function returnSearch() {
  fetch(url) 
    .then((response) => response.json())
    .then((data) => {
      console.log(data, 'data')
      let results = data.results
        for (let song of results){
          console.log(song)
          //add function to display results on page
      }
  })
}


