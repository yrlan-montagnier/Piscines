function letterSpaceNumber(string) {
    const regex = /(\w\s\d(?=[^a-zA-Z0-9]|$))/g;
    const myArray = string.match(regex);
    const emptyArray = []

    if ( !myArray ) {
        return emptyArray
    } else {
        return myArray
    }
}