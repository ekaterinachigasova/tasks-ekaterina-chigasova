function randomize(n) {
    let number = []
    for(let i=0; i<n; i++) {
        number.push(Math.floor((Math.random()*100)+1))
    }
    return number
}
const number=randomize(5)
console.log(number) //n amount of numbers from 1 to 100

function max(arr) {
    return Math.max(...arr)
}
const maxNumber=max(number)
console.log(maxNumber) //max number in array

function min(arr) {
    return Math.min(...arr)
}
const minNumber=min(number)
console.log(minNumber) //min number in array

function even(arr) {
    const bool = []
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2===0) {
            bool.push(true)
        }
    }
    return bool.length
}

const evenNumber=even(number)
console.log(evenNumber) //n even numbers in the array