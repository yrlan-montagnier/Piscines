function slice(c, start, end) {
    let tArray = [];

    if ( !start ) {
        start = 0
    }
    if ( start < 0 ) {
        start = start + c.length
    } 

    if ( !end ) {
        end = c.length
    }

    if ( end < 0 ) {
        end = end + c.length
    }
    
    for ( let i = start; i < end; i++) {
        tArray.push(c[i])
    }

    if ( typeof c === 'string' ) {
        return tArray.join('')
    }
    return tArray
}