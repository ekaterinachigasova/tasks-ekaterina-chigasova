function greet(n) {
    if( !n) {
        console.log("Hi!")
    } else if(n>10) {
        for (let i=0; i<n; i++) {
            console.log("Hi!")
        }
    } else {
        for (let i=0; i<n; i++) {
            console.log("Hello!")
        }
    }
}

greet()
greet(2)
greet(3)
greet(12)