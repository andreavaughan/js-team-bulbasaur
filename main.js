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

 