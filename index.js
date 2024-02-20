function givesAFunc() {
    console.log("returning function")
}


function receivesAFunction(givesAFunc) {
    givesAFunc()
}

function returnsANamedFunction() {
    return givesAFunc
}

function returnsAnAnonymousFunction(){
    return function() {
        console.log("This is where the fun begins")
    }
}