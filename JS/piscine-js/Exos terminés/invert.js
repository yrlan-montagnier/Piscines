function invert(obj){
    let arrayObj = {};
    for(let key in obj){
        if (obj.hasOwnProperty(key)) {
            arrayObj[obj[key]] = key;
        }
    }
    return arrayObj;
}