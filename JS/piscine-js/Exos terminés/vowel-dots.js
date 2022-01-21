const vowels = /([aAeEuUiIoO])/ig;

function vowelDots(str) {
    return str.replace(vowels, "$1.")
}