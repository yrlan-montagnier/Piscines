function citiesOnly(objArr) {
    return objArr.map(a => a.city);
}

function upperCasingStates(arr) {
    return arr.map(a => a.split(' ').map(b => b.charAt(0).toUpperCase() + b.substring(1)).join(' '));
}

function fahrenheitToCelsius(arr) {
    return arr.map(x => Math.floor((parseInt(x.split('°F')[0])-32)/1.8)+'°C')
}

function trimTemp(objArr) {
    objArr.map(a => a.temperature = a.temperature.split(' ').filter(str => str != '').join(''))
    return objArr
}

function tempForecasts(arr) {
    return arr.map(x => Math.floor((parseInt(x.temperature.split('°F')[0])-32)/1.8) + '°Celsius' + ' in ' + x.city + ', ' + upperCasingStates([x["state"]]))
}