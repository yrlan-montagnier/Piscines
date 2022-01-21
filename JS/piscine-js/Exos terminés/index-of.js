function indexOf(a, b, c) {
    if ( c === undefined ) {
        for (let i = 0; i < a.length; i++) {
            if ( b === a[i]) {
                return i;
            }
        }    
    return -1;
    }
    for (let i = c; i < a.length; i++) {
        if ( b === a[i]) {
            return i;
        }
    }
    return -1;
}

function lastIndexOf(a, b, c) {
    if ( c === undefined ) {
        for (let i = a.length ; i >= 0; i--) {
            if ( b === a[i]) {
                return i;
            }
        }    
    return -1;
    }

    for (let i = c; i >= 0; i--) {
        if ( b === a[i]) {
            return i;
        }
    }
    return -1;
}

function includes(a, b) {
    for (let i = 0; i < a.length; i++) {
        if ( b === a[i]) {
            return true;
        }
    }   
    return false 
}