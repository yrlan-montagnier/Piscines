function multiply(a, b) {
    if (b === 0) {
        return 0
    } else if (b === 1) {
        return a
    } if (b < 0) {
        return -multiply(a, -b)
    } else {
        return a + multiply(a, b - 1)
    }
}

const divide = (a,b) => {
    let res = 0
    let sign = (Math.sign(a) == Math.sign(b)) // signe tjrs positif ou négatif 
    a = Math.abs(a)
    b = Math.abs(b)
    while (a >= b) {
        res += 1
        a -= b
    }
    if (sign) {
        return res
    } else {
        return -res
    }
}

const modulo = (a,b) => {
    let sign = Math.sign(a) == 1
    a = Math.abs(a)
    b = Math.abs(b)
    while (a >= b) {
        a -= b
    }
    if (sign) {
        return a
    } else {
        return -a
    }
}
