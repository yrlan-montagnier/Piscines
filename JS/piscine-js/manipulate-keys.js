const filterKeys = (obj, filter) => {
    let newObj = {}
    for (const [key, value] of Object.entries(obj))
        if (filter(key))
            newObj[key] = value
    return newObj
}

const mapKeys = () => {

}

const reduceKeys = () => {
    
}

// TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS 

// const a = ;
// const b = ;
// console.log(filterKeys(a, b))