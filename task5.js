const a=""
const b="tere"
const c="minu nimi on John"

function check(string) {
    if(!string){
        return true
    } else {
        return false
    }
}
console.log(check(a))
console.log(check(b))
console.log(check(c))

function up(string) {
    if(!string){
        return string
    } else {
        return string=string.charAt(0).toUpperCase() + string.slice(1);
    }
}
console.log(up(a))
console.log(up(b))
console.log(up(c))