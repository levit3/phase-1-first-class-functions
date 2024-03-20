function receivesAFunction(otherFunction){
    //console.log("This should come first")
    return otherFunction()
}


function returnsANamedFunction() {
    return function age() {
        return "Ths is age"
    }
}
function returnsAnAnonymousFunction() {
    return () => "This is an anonymous function"
}

/*function otherFunction() {
    console.log("This is the other function")
}

receivesAFunction(otherFunction)*/