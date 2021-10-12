let colors = ["Red", "Green", "White", "Black"]

let a = ""
for (let i=0; i<colors.length; i++){
    a += colors[i]+","
}
a=a.slice(0,-1)+".";
console.log(a) //code with dot at the end

let b = ""
for (let i = 0; i<colors.length; i++){
    b += (colors[i]+",")
}
console.log(b) //code with commas

let c = ""
for (let i = 0; i< colors.length; i++) {
    c += (colors[i] + "+")
}
console.log(c) //code with plusses


