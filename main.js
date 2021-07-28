const form = document.getElementById('search-form')
const url = 'https://proxy-itunes-api.glitch.me/search?term=ariana+grande&country=us&entity=song&limit=5'



  //Event listener

form.addEventListener('submit', function (event) {
    event.preventDefault()
    const searchText = document.getElementById('search-text').value
    console.log(searchText)

    // addSearchParameter ()

    returnSearch()
    form.reset()
})

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
          console.log(song)
          //add function to display results on page
      }
  })
}


