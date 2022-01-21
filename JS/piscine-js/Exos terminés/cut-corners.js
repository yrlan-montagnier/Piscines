function round(a) {
    let rounded = a - a%1
    let decimal = a%1
    let negativeDecimal = -a%1
    
    if ( a > 0 && decimal >= 0.5) {
        return rounded+1
    }
    if ( a > 0 && decimal < 0.5 ) { 
        return rounded
    } 
    if ( a < 0 && negativeDecimal > 0.5) {
        return rounded-1
    }
    if ( a < 0 && negativeDecimal <= 0.5 ) {
        return rounded
    }
    if ( a === 0 ) {
        return a
    }
}

function floor(a) {
    let rounded = a - a%1
    if ( a > 0) {
        return rounded
    } 
    if ( a === 0) {
        return a
    } else {
        return rounded-1
    }
}

function ceil(a) {
    let rounded = a - a%1
    if ( a > 0) {
        return rounded+1
    } else {
        return rounded
    }
}

function trunc(a) {
    let rounded = a - a%1
    if ( a > 0) {
        return rounded
    } else {
        return rounded
    }
}