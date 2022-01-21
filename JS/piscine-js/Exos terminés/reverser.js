function reverse(arr) {
    let newArr = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }

    if ( Array.isArray(arr) ) {
        return newArr;
    } else {
        return newArr.join('')
    }
}