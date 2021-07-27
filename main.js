const form = document.querySelector('#artist-form')
const url = 'http://127.0.0.1:8080'
const movieList = document.querySelector('#movie-list')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const artistText = document.getElementById('artist-text').value
    console.log(artistText)
   
    // this will clear my input after submitting a todo
    form.reset()
  })

  // const url = 'https://itunes.apple.com/search?'
  // // const form = need to get form id from html
  // // const sontList = need to get list id from html
  
  // //Event listeners
  
  // form.addEventListener('submit', function (event) {
  //     event.preventDefault()
  //     const //create a variable that contains the value of the search
  // })

 

