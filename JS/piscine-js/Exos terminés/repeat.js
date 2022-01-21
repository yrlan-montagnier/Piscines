function repeat(string, number) {
    let a = [];
    while(a.length < number) {
        a.push(string);
    }
    return a.join('')
}