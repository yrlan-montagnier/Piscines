const concatArray = (a, b) => { return a.concat(b) }
const concatString = (a, b) => { return a.concat(" ", b) }
const concatInt = (a, b) => { return a + b }

const concatObject = (a, b) => { 
    for (let key in b) {
        if (key in a && Array.isArray(a[key]) && Array.isArray(b[key]))
            a[key] = concatArray(a[key], b[key])

        else if (key in a && typeof a[key] === 'string' && typeof b[key] === 'string')
            a[key] = concatString(a[key], b[key])

        else if (key in a && typeof a[key] === 'number' && typeof b[key] === 'number')
            a[key] = concatInt(a[key], b[key])
        
        else if (key in a && Object.prototype.toString.call(a[key]) === '[object Object]' && Object.prototype.toString.call(b[key]) === '[object Object]') 
            a[key] = concatObject(a[key], b[key])
        
        else 
            a[key] = b[key]
    }
    return a
}

const fusion = (arg1, arg2) => {
    let a = Object.assign({}, arg1)
    let b = Object.assign({}, arg2)

    if (Array.isArray(a) & Array.isArray(b))
        return concatArray(a, b)

    else if (typeof a === 'string' && typeof b === 'string')
        return concatString(a, b)

    else if (typeof a === 'number' && typeof b === 'number')
        return concatInt(a, b)

    else 
        return concatObject(a, b)    
}

// ************************************************************************************************************************************
// ************************************************************************************************************************************
// const a = [1, 2];
// const b = [3, 4];
// const a = 'Salem';
// const b = 'alem';
// const a = 4
// const b = 11
// const a = { a: 'hello', b: [] };
// const b = { a: 4 };
// const a = { a: 1, b: { c: 'Salem' } }
// const b = { a: 10, x: [], b: { c: 'alem' } }

//  console.log(concatObject(a, b))