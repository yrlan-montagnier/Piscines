function sameAmount(dataStr, reg1, reg2) {
    reg1 = new RegExp(reg1, 'g')
    reg2 = new RegExp(reg2, 'g')
    let nbCount1 = 0
    let nbCount2 = 0
    let myArr1 = dataStr.match(reg1)
    let myArr2 = dataStr.match(reg2)

    // check la longueur des tableaux + return true si égal
    if (myArr1) {
        nbCount1 = myArr1.length
    }
    if (myArr2) {
        nbCount2 = myArr2.length
    }
    if (nbCount1 == nbCount2) {
        return true
    } else {
        return false
    }
}