const cutFirst = (string) => { return string.substring(2) }

const cutLast = (string) => { return string.substring(0, string.length-2) }

const cutFirstLast = (string) => {
    if ( string.length < 4) {
        return string.substring(string.length, string.length)
    } else {
        return string.substring(2, string.length-2)
    }
}

const keepFirst = (string) => { return string.substring(0, 2) }

const keepLast = (string) => { return string.substring(string.length-2, string.length) }

const keepFirstLast = (string) => {
    let kf3 = string.substring(0, 3);
    let kfl = keepFirst() + keepLast()

    if ( string.length === 2 ) {
        return keepFirst()
    }

    if ( string.length === 3 ) {
        return kf3
    } 

    if ( string.length > 3 ) {
        return kfl
    }
}