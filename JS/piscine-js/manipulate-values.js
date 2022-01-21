const filterValues = (obj, filter) => {
    let newObj = {};
    for (const [key, value] of Object.entries(obj))
        if (filter(value))
            newObj[key] = value

    return newObj
}

const mapValues = (obj, map) => {
    let newObj = {};
    for (const [key, value] of Object.entries(obj))
        newObj[map(value)] = value

    return newObj
}

const reduceValues = (obj, reduce) => {
    let newObj = {};
}

// TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS TESTS 

// const obj = {
//     tomato: 200,
//     vinegar: 80,
//     oil: 50,
//     onion: 220,
//     garlic: 22,
//   };

// const map = (ele) => ele - 100

// console.log(mapValues(obj, map))