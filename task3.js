function greet (name){
    if(Array.isArray(name)){
        return "Hello, " + name[0] + "and" + name [1] + ".";
    
    } else if (name) {
     return "Hello, " + name + ".";

    } else {
        return "Hello, my friend.";
    }
};
    
console.log(greet('Bob'));
console.log(greet(['Bob', "June"]));
console.log(greet());
