const form = document.querySelector('#artist-form')
const url = 'https://proxy-itunes-api.glitch.me/search?'
// const movieList = document.querySelector('#movie-list')



  //Event listener

form.addEventListener('submit', function (e) {
    e.preventDefault()
    addSearchParameter ()

    // returnSearch()
    form.reset()
  })

function addSearchParameter (){
  const artistText = document.getElementById('artist-text').value
  const searchToString = String(artistText)
  console.log(artistText)
  console.log(searchToString)

  const refactoredSearch = encodeURIComponent(searchToString).replace(/%20/g, "+")
  console.log(refactoredSearch)
}



// function returnSearch() {
//   fetch(searchParameter())
//     .then((response) => response.json())
//     .then((data) => {
//       for (const song of data) {
//         console.log(song)

//       }
//     })
// }

 

