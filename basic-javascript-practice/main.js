import { films } from '/assets/films.js'

console.log("Hey I am Javascript on your page")

let mainArea = document.querySelector("main")

films.forEach(function(film) {
    let filmDiv = document.createElement("div")
    let title = document.createElement("h1")
    let crawl = document.createElement("p")

    filmDiv.appendChild(title)
    filmDiv.appendChild(crawl)

    title.textContent = film.title
    crawl.innerText = film.opening_crawl

    mainArea.appendChild(filmDiv)
})





// download files from canvas for below

const malesCharacters = people.filter(person => person.gender)
console.log(malesCharacters)