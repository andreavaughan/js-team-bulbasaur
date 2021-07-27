const form = document.querySelector('#artist-form')
c

form.addEventListener('submit', function (e) {
    e.preventDefault()
    const artistText = document.getElementById('artist-text').value
    console.log(artistText)
    // this will clear my input after submitting a todo
    form.reset()
  })

