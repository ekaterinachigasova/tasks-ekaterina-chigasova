const movieData = require('./moviedata.json')

movieData.map(movie => {
    movie.Year = +movie.Year
    movie.imdbRating = +movie.imdbRating
    movie.imdbVotes = +(movie.imdbVotes.replace(/,/g,''))
    movie.Actors = movie.Actors.split(', ')
})

//console.log('movie', movieData)
//FUNCTIONS

function findBestRating (array) {
    return array.reduce ((previousValue, currentValue) => {
        if (previousValue.imdbRating > currentValue.imdbRating) {
            return previousValue
    } else {
        return currentValue
        }
    })
}

function findMostRated(array) {
    return array.reduce((previousValue, currentValue) => {
        if (previousValue.imdbVotes > currentValue.imdbVotes) {
            return previousValue
        } else {
            return currentValue
        }
    })
}

function getRatingText(movie, startingText) {
    let string = startingText + ' is '
    string += movie.Title
    string += ', directed by '
    string += movie.Director
    string += ' and was released in '
    string += movie.Released + '.'

    return string
}

// Exercise 1

console.log('Exercise 1')

const moviesBetween = movieData.filter(movie => {
    if (movie.Year >= 1962 && movie.Year <= 1972) {
        return movie
    }
})
//console.log('moviesBetween', moviesBetween)

const bestRating = moviesBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
        return previousValue
    } else {
        return currentValue
    }
})
//console.log(bestRating)


const mostRated = moviesBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imdbVotes > currentValue.imdbVotes) {
        return previousValue
    } else {
        return currentValue
    }
})
//console.log(mostRated)

let bestRatingString = 'Best rated movie is '
bestRatingString += bestRating.Title
bestRatingString += ', directed by '
bestRatingString += bestRating.Director
bestRatingString += ' and was released in '
bestRatingString += bestRating.Released + '.'

console.log(bestRatingString) 

let mostRatedString = 'Most rated movie is '
mostRatedString += mostRated.Title
mostRatedString += ', directed by '
mostRatedString += mostRated.Director
mostRatedString += ' and was released in '
mostRatedString += mostRated.Released + '.'

console.log(mostRatedString)

// Exercise 2

console.log('Exercise 2')

const includesDrama = movieData.filter(movie => {
    if (movie.Genre.includes('Drama')){
        return movie
    }
})

const bestRatingDrama = findBestRating(includesDrama)
const mostRatedDrama = findMostRated(includesDrama)

const bestRatingDramaString = getRatingText(bestRatingDrama, 'Best rated drama')
const mostRatedDramaString = getRatingText(mostRatedDrama, 'Most rated drama')

console.log(bestRatingDramaString)
console.log(mostRatedDramaString)

// Exercise 3

console.log('Exercise 3')

const ratedR = movieData.filter(movie => {
    if (movie.Rated === 'R') {
        return movie
    }
})
//console.log(ratedR)

const ratedRTitles = ratedR.map(movie => {
    return movie.Title
})
//console.log(ratedRTitles)

let ratedRString = 'Movies that are rated R are: '
ratedRString += ratedRTitles.join(', ') + '.'

console.log(ratedRString)

let actors = []
ratedR.map(movie => {
    movie.Actors.map(actor => {
        actors.push(actor)
    })
})

let uniqueActors = [... new Set(actors)];
//console.log(uniqueActors)

let actorsString = 'Actors that played in those movies are: '
actorsString += uniqueActors.join(', ') + '.'

console.log(actorsString)